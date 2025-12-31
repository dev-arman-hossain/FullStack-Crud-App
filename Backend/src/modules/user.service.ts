import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const createUser = async (data: any) => {
  const { name, email, jobs, status } = data;
  const user = await prisma.user.create({
    data: { name, email, jobs, status },
  });
  return user;
};

const updateUser = async (data: any, id: string) => {
  const { name, email, jobs, status } = data;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email, jobs, status },
  });
  return user;
};

const deleteUser = async (id: any) => {
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return user;
};

export const userService = {
  getAllUsers,
  updateUser,
  createUser,
  deleteUser,
};
