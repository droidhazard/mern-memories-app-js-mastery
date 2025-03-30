import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "this works" });
});

router.get("/test", (req, res) => {
  res.send({ message: "test works" });
});

export default router;
