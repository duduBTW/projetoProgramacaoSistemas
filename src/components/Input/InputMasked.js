import React from "react";

import MaskedInput from "react-input-mask";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

export const InputMasked = ({
  name,
  label,
  errors,
  classStyle,
  control,
  mask,
  onBeforeInputCapture,
  rules = {},
  returnRaw = true,
  onChange,
}) => {
  const isValidField = (v) =>
    v && v.replace(/\D/g, "").length === mask.replace(/\D/g, "").length
      ? undefined
      : "Campo obrigatorio.";

  return (
    <Controller
      as={
        <MaskedInput
          mask={mask}
          alwaysShowMask
          maskChar="_"
          onBeforeInputCapture={onBeforeInputCapture}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label={label}
              variant="outlined"
              value={inputProps.tel}
              name={inputProps.name}
              error={errors}
              className={classStyle}
              helperText={errors && <span>{errors.message}</span>}
            />
          )}
        </MaskedInput>
      }
      onChange={([e]) => {
        if (returnRaw) {
          onChange({
            e,
            valueRaw: e.target.value.replace(/\D/g, ""),
            valid:
              e.target.value.replace(/\D/g, "").length ===
              mask.replace(/\D/g, "").length,
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
        validate: {
          inputTelRequired: isValidField,
        },
      }}
    />
  );
};
