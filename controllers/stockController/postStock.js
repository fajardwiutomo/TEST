import Stock from "../../models/stock/Stock.js";

export const postStock = async (req, res) => {
  try {
    const { picture, name, priceBuy, priceSell, stock } = req.body;
    const newStock = new Stock({
      picture,
      name,
      priceBuy,
      priceSell,
      stock,
    });
    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
