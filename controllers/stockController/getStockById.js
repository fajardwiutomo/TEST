import Stock from "../../models/stock/Stock.js";

export const getStockById = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findById(id);
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
