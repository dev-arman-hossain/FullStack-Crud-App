import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.get("/users", userController.getAllUsers);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export const userRouter = router;
