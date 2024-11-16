import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray } from "react-hook-form";

export const Child = ({ control, userIndex, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `users.${userIndex}.childs`,
  });

  useEffect(() => {
    console.log("fields:", fields);
    console.log("userIndex:", userIndex);
    console.log("errors:", errors);
  }, [errors]);

  return (
    <Box>
      {fields.map((field, index) => {
        return (
          <Box key={field.id} className="child-wrapper">
            <Controller
              name={`users.${userIndex}.childs.${index}.childName`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Имя ребёнка"
                  error={
                    !!errors.users?.[userIndex]?.childs?.[index]?.childName
                  }
                  helperText={
                    errors.users?.[userIndex]?.childs?.[index]?.childName
                      ?.message
                  }
                />
              )}
            />
            <Controller
              name={`users.${userIndex}.childs.${index}.childAge`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  label="Возраст ребёнка"
                  error={!!errors.users?.[userIndex]?.childs?.[index]?.childAge}
                  helperText={
                    errors.users?.[userIndex]?.childs?.[index]?.childAge
                      ?.message
                  }
                />
              )}
            />
            <Button onClick={() => remove(index)}>Удалить ребёнка</Button>
          </Box>
        );
      })}
      <Button onClick={() => append({ childName: "", childAge: "" })}>
        Добавить ребёнка
      </Button>
    </Box>
  );
};
