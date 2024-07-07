"use server";
import { db } from "@/lib/db";
import { Order } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export const calculateStoreCredit = (order: Order) => {
  return cartTotal;
};
