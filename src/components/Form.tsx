import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { schema } from "../utils/schema";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      age: "",
      email: "",
      phoneNumber: "",
      childName: "",
      childAge: "",
    },
  });

  function onSubmit() {
    console.log("форма отправлена");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Имя"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="Возраст"
            error={!!errors.age}
            helperText={errors.age?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Почта"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Номер телефона"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        name="childName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Имя ребёнка"
            error={!!errors.childName}
            helperText={errors.childName?.message}
          />
        )}
      />
      <Controller
        name="childAge"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="Возраст ребёнка"
            error={!!errors.childAge}
            helperText={errors.childAge?.message}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Отправить
      </Button>
    </form>
  );
};
