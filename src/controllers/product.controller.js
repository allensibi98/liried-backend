import { db } from "../config/db.js";

export const getProducts = async (_req, res, next) => {
  try {
    const [rows] = await db.query("SELECT * FROM products ORDER BY id DESC");
    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const { name, price, quantity } = req.body;

    // Validate input
    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    if (price === undefined || price === null || price < 0) {
      return res.status(400).json({
        success: false,
        message: "Valid price is required (must be >= 0)",
      });
    }

    if (quantity === undefined || quantity === null || quantity < 0 || !Number.isInteger(Number(quantity))) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required (must be a non-negative integer)",
      });
    }

    const [result] = await db.query(
      "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)",
      [name.trim(), price, quantity]
    );

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: {
        id: result.insertId,
        name: name.trim(),
        price,
        quantity,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    // Validate input
    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    if (price === undefined || price === null || price < 0) {
      return res.status(400).json({
        success: false,
        message: "Valid price is required (must be >= 0)",
      });
    }

    if (quantity === undefined || quantity === null || quantity < 0 || !Number.isInteger(Number(quantity))) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required (must be a non-negative integer)",
      });
    }

    const [result] = await db.query(
      "UPDATE products SET name=?, price=?, quantity=? WHERE id=?",
      [name.trim(), price, quantity, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      data: { id, name: name.trim(), price, quantity },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM products WHERE id=?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
