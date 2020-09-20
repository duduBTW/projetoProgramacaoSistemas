import React from "react";
import { useForm, Controller, ValidationRules } from "react-hook-form";

import { Typography, Grid, Paper, TextField } from "@material-ui/core";

import { InputMasked } from "../Input/InputMasked";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldWithError from "../Input/InputWithError";
import FormBody from "./FormBody";
import { FormProps } from "./fotmTypes";

const convertArrayToObject = (array: Array<object>, key: string) => {
  const initialValue = {};
  return array.reduce((obj: Object, item: any) => {
    return {
      ...obj,
      [item[key]]: null,
    };
  }, initialValue);
};

function Form({
  defaultValues,
  onSubmit,
  schema,
  buttons,
  title,
  classForm,
  classBody,
  customValue,
}: FormProps) {
  defaultValues = { ...convertArrayToObject(schema, "name"), ...defaultValues };

  const { register, handleSubmit, control, errors, setValue, reset } = useForm({
    defaultValues,
  });

  console.log("defaultValues", defaultValues);

  return (
    <form className={classForm} noValidate onSubmit={handleSubmit(onSubmit)}>
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
          // @ts-ignore
          className={classBody}
          schema={schema}
          register={register}
          control={control}
          errors={errors}
          customValue={customValue}
        />
      </Grid>
      {buttons}
    </form>
  );
}

export default React.memo(Form);
