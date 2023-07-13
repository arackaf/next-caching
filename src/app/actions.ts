"use server";

import { revalidateTag } from "next/cache";

export async function invalidateA() {
  revalidateTag("tag-a");
}

export async function invalidateB() {
  revalidateTag("tag-b");
}

export async function invalidateC() {
  revalidateTag("tag-c");
}

export async function invalidateAll() {
  revalidateTag("tag-all");
}
