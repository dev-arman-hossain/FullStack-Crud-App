import { Request, Response } from "express";
import { userService } from "./user.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(
      req.body,
      req.params.id as string
    );
    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "error deleting user" });
  }
};

export const userController = {
  createUser,
  updateUser,
  getAllUsers,
  deleteUser,
};
