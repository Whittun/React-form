import { z } from "zod";

const childSchema = z.object({
  childName: z
    .string()
    .regex(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Имя должно состоять из букв")
    .min(4, "Должно содержать не менее 4 символов"),
  childAge: z
    .string()
    .regex(
      /^(?:[1-9]|[1-9][0-9]|1\d{2}|200)$/,
      "Возраст должен быть числом от 1 до 200"
    ),
});

const userSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Имя должно состоять из букв")
    .min(4, "Должно содержать не менее 4 символов"),
  age: z
    .string()
    .regex(
      /^(?:[1-9]|[1-9][0-9]|1\d{2}|200)$/,
      "Возраст должен быть числом от 1 до 200"
    ),
  email: z.string().email("Нужно указать почту"),
  phoneNumber: z.string().regex(/^\d+$/, "Нужно указать номер телефона"),
  childs: z.array(childSchema),
});

export const schema = z.object({
  users: z.array(userSchema),
});
