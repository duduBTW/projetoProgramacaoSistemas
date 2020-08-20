import React from "react";
import { TextField } from "@material-ui/core";

export default function TextFieldWithError({
  name,
  errors,
  TextFieldProps = {},
  ...rest
}) {
  return (
    <TextField
      {...rest}
      name={name}
      error={errors}
      helperText={errors && <span>{errors.message}</span>}
      inputProps={TextFieldProps}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
