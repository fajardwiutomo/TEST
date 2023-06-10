import Stock from "../../models/stock/Stock.js";

export const getStock = async (req, res) => {
  try {
    const { search, page, limit } = req.query;
    const pageLimit = limit || 10;

    // Search fields
    const stringSearchFields = ["name", "email"];

    // Calculate start and end indexes based on page and limit
    const startIndex = (parseInt(page) - 1) * parseInt(pageLimit);
    const endIndex = startIndex + parseInt(pageLimit);

    let filterResult1;

    if (search) {
      const stock = await Stock.find({
        $or: [{ name: { $regex: search, $options: "i" } }],
      });
      filterResult1 = stock;
    } else {
      const stock = await Stock.find();
      filterResult1 = stock;
    }

    // getTotalDocument
    const totalDocuments = await Stock.countDocuments();

    // Use `slice` to paginate the results
    const filterResult = filterResult1.slice(startIndex, endIndex);
    res.status(200).json({ totalDocuments, filterResult });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
