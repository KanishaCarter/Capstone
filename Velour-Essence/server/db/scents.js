import express from "express";
import client from "../client.js";
const router = express.Router();

// GET ALL SCENTS
router.get("/", async (req, res, next) => {
  try {
    const result = await client.query("SELECT * FROM scents;");
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET ONE SCENT BY ID
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await client.query("SELECT * FROM scents WHERE scent_id=$1;", [id]);
    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// SEARCH SCENTS BY NAME
router.get("/search/:term", async (req, res, next) => {
  try {
    const term = req.params.term;
    const result = await client.query(
      "SELECT * FROM scents WHERE scent_name ILIKE $1;",
      [`%${term}%`]
    );
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

export default router;

