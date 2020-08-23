import React from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

function SelectWithError({
  name,
  label,
  control,
  Controller,
  errors,
  FormControlProps = { variant: "outlined" },
  rules = {},
  children,
}) {
  return (
    <FormControl {...FormControlProps} error={errors}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={`${name}-label`} id={name} label={label}>
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {children}
          </Select>
        }
        name={name}
        control={control}
        rules={rules}
      />
      {errors && errors.message && (
        <FormHelperText>{errors.message}</FormHelperText>
      )}
    </FormControl>
  );
}

export default React.memo(SelectWithError);
