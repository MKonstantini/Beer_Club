"use server";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

// TYPES
export type NewProductType = {
  name: string;
  price: Decimal;
  detail: string | null;
  isOnSale: boolean;
  img_reference: string | null;
};

// GET
export const getAllProducts = async () => {
  try {
    return db.product.findMany();
  } catch (err) {
    throw err;
  }
};
export const getProductById = async (id: string) => {
  try {
    return db.user.findUnique({ where: { id } });
  } catch (err) {
    throw err;
  }
};

// CREATE
export const createNewProduct = async (data: NewProductType) => {
  try {
    const productExist = await db.product.findUnique({
      where: { name: data.name.toLowerCase() },
    });

    if (productExist) {
      throw Error("product already exists.");
    }

    return db.product.create({ data });
  } catch (err) {
    throw err;
  }
};

// UPDATE
export const updateUser = async (id: string, data: Partial<Product>) => {
  try {
    const existingProduct = db.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      throw new Error("Product not found.");
    }

    return db.product.update({
      where: { id },
      data,
    });
  } catch (err) {
    throw err;
  }
};

// DELETE
export const deleteProduct = async (id: string) => {
  try {
    const existingUser = db.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new Error("User not found.");
    }

    return db.product.delete({
      where: { id },
    });
  } catch (err) {
    throw err;
  }
};
