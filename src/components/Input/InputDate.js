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
  errors,
}) {
  return (
    <Controller
      as={
        <KeyboardDatePicker
          clearable
          autoOk
          format="DD/MM/YYYY"
          views={["year", "month", "date"]}
          inputVariant="outlined"
          margin="dense"
          InputAdornmentProps={{ position: "start" }}
          error={errors[name]}
        />
      }
      name={name}
      // defaultValue={myCustomObject?.opened_at}
      rules={{
        ...rules,
        // validate: {
        //   inputTelRequired: isValidField,
        // },
      }}
      control={control}
    />
  );
}
