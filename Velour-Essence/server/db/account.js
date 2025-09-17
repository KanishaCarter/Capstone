import express from "express";
import client from "../client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res, next) => {
  try {
    const { username, user_password, user_first_name, user_last_name } = req.body;
    const hash = await bcrypt.hash(user_password, 10);
    const result = await client.query(
      `INSERT INTO account (username, user_password, user_first_name, user_last_name)
       VALUES ($1, $2, $3, $4) RETURNING *;`,
      [username, hash, user_first_name, user_last_name]
    );
    const user = result.rows[0];
    const token = jwt.sign({ id: user.user_id }, "secret");
    res.status(201).send({ token, user });
  } catch (err) {
    next(err);
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const { username, user_password } = req.body;
    const result = await client.query("SELECT * FROM account WHERE username=$1;", [username]);
    const user = result.rows[0];
    if (!user) return res.status(401).send("User not found");
    const valid = await bcrypt.compare(user_password, user.user_password);
    if (!valid) return res.status(401).send("Invalid password");
    const token = jwt.sign({ id: user.user_id }, "secret");
    res.send({ token, user });
  } catch (err) {
    next(err);
  }
});

export default router;
