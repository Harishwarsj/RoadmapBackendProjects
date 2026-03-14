import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from "../controller/todocontroller.js";
import middleWare  from "../middleware/auth.middleware.js";

const router = express.Router();
console.log("Todo Routes Loaded");
router.post("/post", middleWare, createTodo);
router.get("/get", middleWare, getTodos);

router.route("/:id")
  .put(middleWare, updateTodo)
  .delete(middleWare, deleteTodo);

export default router;