import express from "express";
import client from "../client.js";
const router = express.Router();

// GET ALL ORDERS FOR USER
router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const result = await client.query(
      `SELECT * FROM orders WHERE user_id=$1;`,
      [userId]
    );
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET ONE ORDER
router.get("/one/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const result = await client.query("SELECT * FROM orders WHERE order_id=$1;", [orderId]);
    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
