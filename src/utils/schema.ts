import { z } from "zod";

export const schema = z.object({
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
