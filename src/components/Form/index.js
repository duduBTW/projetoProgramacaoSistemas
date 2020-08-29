import React from "react";
import { useForm, Controller } from "react-hook-form";

import { Typography, Grid, Paper, TextField } from "@material-ui/core";

import { InputMasked } from "../Input/InputMasked";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldWithError from "../Input/InputWithError";
import FormBody from "./FormBody";

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: null,
    };
  }, initialValue);
};

export default function Form({
  defaultValues,
  onSubmit,
  schema,
  buttons,
  title,
}) {
  defaultValues = { ...convertArrayToObject(schema, "name"), ...defaultValues };

  const { register, handleSubmit, control, errors, setValue, reset } = useForm({
    defaultValues,
  });

  console.log("defaultValues", defaultValues);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {title && (
          <Grid
            style={{ padding: "0px 0px 5px 15px" }}
            container
            direction="row"
            alignItems="center"
          >
            <Typography style={{ padding: 0 }} variant="h6">
              {title}
            </Typography>
          </Grid>
        )}
        <FormBody
          schema={schema}
          register={register}
          control={control}
          errors={errors}
        />
      </Grid>
      {buttons}
    </form>
  );
}
