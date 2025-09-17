import express from "express";
import client from "../client.js";
const router = express.Router();

// GET CART ITEMS FOR USER
router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const result = await client.query(
      `SELECT c.scent_id, s.scent_name, s.scent_price, c.quantity
       FROM cart c JOIN scents s ON c.scent_id = s.scent_id
       WHERE c.user_id=$1;`,
      [userId]
    );
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

// ADD TO CART
router.post("/add", async (req, res, next) => {
  try {
    const { userId, scentId, quantity } = req.body;
    const result = await client.query(
      `INSERT INTO cart (user_id, scent_id, quantity)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, scent_id)
       DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity
       RETURNING *;`,
      [userId, scentId, quantity]
    );
    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// REMOVE FROM CART
router.post("/remove", async (req, res, next) => {
  try {
    const { userId, scentId } = req.body;
    await client.query("DELETE FROM cart WHERE user_id=$1 AND scent_id=$2;", [userId, scentId]);
    res.send({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;

