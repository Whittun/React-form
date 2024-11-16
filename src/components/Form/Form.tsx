import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { schema } from "../../utils/schema";

import "./Form.css";
import { useEffect } from "react";
import { Child } from "./childs";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      users: [
        {
          name: "",
          age: "",
          email: "",
          phoneNumber: "",
          childs: [],
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({ name: "users", control });

  function onSubmit() {
    console.log("форма отправлена");
  }

  useEffect(() => {
    console.log("fields:", fields);
    console.log(errors);
  }, [fields, errors]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <Box key={field.id}>
            <Controller
              name={`users.${index}.name`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Имя"
                  error={!!errors.users?.[index]?.name}
                  helperText={errors.users?.[index]?.name?.message}
                />
              )}
            />
            <Controller
              name={`users.${index}.age`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  label="Возраст"
                  error={!!errors.users?.[index]?.age}
                  helperText={errors.users?.[index]?.age?.message}
                />
              )}
            />
            <Controller
              name={`users.${index}.email`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Почта"
                  error={!!errors.users?.[index]?.email}
                  helperText={errors.users?.[index]?.email?.message}
                />
              )}
            />
            <Controller
              name={`users.${index}.phoneNumber`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Номер телефона"
                  error={!!errors.users?.[index]?.phoneNumber}
                  helperText={errors.users?.[index]?.phoneNumber?.message}
                />
              )}
            />
            <Button onClick={() => remove(index)}>Удалить пользователя</Button>
            <Child userIndex={index} control={control} errors={errors} />
          </Box>
        );
      })}

      <Button disabled={!fields.length} type="submit" variant="contained">
        Отправить
      </Button>
      <Button
        type="button"
        variant="contained"
        onClick={() =>
          append({
            name: "",
            age: "",
            email: "",
            phoneNumber: "",
            childs: [],
          })
        }
      >
        Добавить пользователя
      </Button>
    </form>
  );
};
