import todos from "../models/todo.js";
console.log("Todo Controller Loaded");
export const createTodo = async (req, res) => {
 console.log("Incoming request:", req.method, req.originalUrl);
  console.log("Creating Todo with data:", req.body);
   const todo = await todos.create({
    
    ...req.body,
    user: req.user._id
  });
  res.status(201).json(todo);
};

export const getTodos = async (req, res) => {

  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  // const skip = (page - 1) * limit;
const skip = 0;
  const filter = { user: req.user._id };
  console.log("req.query:", req.query.title);
  if (req.query.title) {
    filter.title = { $regex: req.query.title, $options: "i" };
  }

  const todosData = await todos.find(filter)
    .sort(req.query.sort || "-createdAt")
    .skip(skip)
    .limit(limit);

  const total = await todos.countDocuments(filter);

  res.json({ data: todosData, page, limit, total });
};

export const updateTodo = async (req, res) => {
  const todo = await todos.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Not found" });

  if (todo.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Forbidden" });

  Object.assign(todo, req.body);
  await todo.save();

  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  const todoDelete = await todos.findById(req.params.id);
  if (!todoDelete) return res.status(404).json({ message: "Not found" });

  if (todoDelete.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Forbidden" });

  await todoDelete.deleteOne();
  res.status(204).send();
};