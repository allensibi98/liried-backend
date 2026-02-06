import { db } from "../config/db.js";

export const getReport = async (_req, res, next) => {
  try {
    const [[count]] = await db.query(
      "SELECT COUNT(*) AS totalProducts FROM products"
    );

    const [[value]] = await db.query(
      "SELECT SUM(price * quantity) AS totalValue FROM products"
    );

    res.json({
      success: true,
      data: {
        totalProducts: count.totalProducts,
        totalInventoryValue: value.totalValue || 0,
      },
    });
  } catch (error) {
    next(error);
  }
};
