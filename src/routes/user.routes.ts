import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller.js";
import { UserService } from "../services/user.service.js";
import { UserRepository } from "../repositories/user.repository.js";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get("/users", (_req: Request, res: Response) => {
  res.json(userController.getUsers());
});

router.get("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = userController.getUserById(id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.json(user);
});

router.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = userController.createUser(name, email);

  res.status(201).json(user);
});

router.delete("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = userController.deleteUser(id);

  if (!deleted) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(204).send();
});

export default router;