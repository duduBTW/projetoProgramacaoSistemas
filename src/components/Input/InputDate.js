import React from "react";
import { Controller } from "react-hook-form";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function InputDate({
  onChange,
  returnRaw = false,
  name,
  control,
  rules,
}) {
  return (
    <Controller
      as={
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      }
      onChange={([e]) => {
        if (returnRaw) {
          onChange({
            e,
            valueRaw: e.target.value.replace(/\D/g, ""),
          });
          return e.target.value.replace(/\D/g, "");
        } else {
          onChange({ e });
          return e.target.value;
        }
      }}
      control={control}
      name={name}
      rules={{
        ...rules,
        // validate: {
        //   inputTelRequired: isValidField,
        // },
      }}
    />
  );
}
