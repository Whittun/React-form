import { Box, Button, TextField } from "@mui/material";

import {
  Control,
  Controller,
  FieldErrors,
  useFieldArray,
} from "react-hook-form";
import { Form } from "./Form";

import "./Form.css";

type ChildProps = {
  control: Control<Form>;
  userIndex: number;
  errors: FieldErrors<Form>;
};

export const Child: React.FC<ChildProps> = ({ control, userIndex, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `users.${userIndex}.childs`,
  });

  return (
    <Box className="childs">
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
                  size="small"
                  className="child-name"
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
                  size="small"
                />
              )}
            />
            <Button
              className="button-delete-child"
              onClick={() => remove(index)}
            >
              Удалить ребёнка
            </Button>
          </Box>
        );
      })}
      <Button onClick={() => append({ childName: "", childAge: "" })}>
        Добавить ребёнка
      </Button>
    </Box>
  );
};
