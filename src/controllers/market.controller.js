import Market from "../models/market.model.js";
import Orderbook from "../models/orderbook.model.js";
import { createMarketSchema } from "../schemas/market.schema.js";

export const createMarket = async (req, res) => {
  try {
    const { title } = createMarketSchema.parse(req.body);
    const creatorId = req.body.creatorId;
    const market = await Market.create({ title, creatorId });
    const yesOrderbook = await Orderbook.create({
      marketId: market._id,
      type: "YES",
    });
    const noOrderbook = await Orderbook.create({
      marketId: market._id,
      type: "NO",
    });

    return res.status(201).json({ market });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
