"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function login(formData: FormData) {
  const { password, username } = FormSchema.parse({
    customerId: formData.get("username"),
    amount: formData.get("password"),
  });

  redirect("/pages");
}
