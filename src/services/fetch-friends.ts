"use server";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

// Create a friendship
export const createFriendship = async (userId: number, friendId: number) => {
  try {
    return await db.friendship.create({
      data: {
        userId,
        friendId,
      },
    });
  } catch (err) {
    throw err;
  }
};
