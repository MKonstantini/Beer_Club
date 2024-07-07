"use server";
import { db } from "@/lib/db";

// GET
export const getAllFriendshipsForUser = async (userId: string) => {
  try {
    return await db.friendship.findMany({
      where: {
        OR: [{ userId }, { friendId: userId }],
      },
      include: {
        user: true,
        friend: true,
      },
    });
  } catch (err) {
    throw err;
  }
};

// CREATE
export const createFriendship = async (userId: string, friendId: string) => {
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

// DELETE
export const deleteFriendship = async (id: string) => {
  try {
    return await db.friendship.delete({
      where: { id },
    });
  } catch (err) {
    throw err;
  }
};
