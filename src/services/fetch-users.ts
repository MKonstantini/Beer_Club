"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

// TYPE
export type UserType = {
  email: string;
  password: string;
};

// GET
export const getAllUsers = async () => {
  try {
    return db.user.findMany();
  } catch (err) {
    throw err;
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    return db.user.findUnique({ where: { email } });
  } catch (err) {
    throw err;
  }
};

// CREATE
export const createNewUser = async (data: UserType) => {
  try {
    const userExist = await db.user.findUnique({
      where: { email: data.email.toLowerCase() },
    });

    if (userExist) {
      throw Error("User already exists.");
    }

    let password = await bcrypt.hash(data.password, 10);

    return db.user.create({
      data: {
        email: data.email.toLowerCase(),
        password,
      },
    });
  } catch (err) {
    throw err;
  }
};

// UPDATE
export const updateUser = async (id: string, data: Partial<UserType>) => {
  try {
    const existingUser = db.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new Error("User not found.");
    }

    return db.user.update({
      where: { id },
      data,
    });
  } catch (err) {
    throw err;
  }
};

// DELETE
export const deleteUser = async (id: string) => {
  try {
    const existingUser = db.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new Error("User not found.");
    }

    return db.user.delete({
      where: { id },
    });
  } catch (err) {
    throw err;
  }
};
