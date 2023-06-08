import Stock from "../../models/stock/Stock.js";

export const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { picture, name, priceBuy, priceSell, stock } = req.body;
    // console.log(req.body)
    const updateStock = await Stock.findByIdAndUpdate(
      { _id: id },
      {
        picture,
        name,
        priceBuy,
        priceSell,
        stock,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updateStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
