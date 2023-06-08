import Stock from "../../models/stock/Stock.js";

export const deleteStock = async (req, res) => {
    try {
        const stock = await Stock.findByIdAndDelete(req.params.id);
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}