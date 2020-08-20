import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldWithError from "../Input/InputWithError";
import { Grid } from "@material-ui/core";
import { InputMasked } from "../Input/InputMasked";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

export default function FormBody({
  schema,
  register,
  control,
  errors,
  index = "",
  rules = {},
  customValue,
}) {
  const classes = useStyles();

  return schema.map((schemaItem) => {
    const name =
      index !== "" ? `items[${index}].${schemaItem.name}` : schemaItem.name;

    if (errors.items)
      console.log("errors", errors.items[index][schemaItem.name]);

    if (schemaItem.hidden)
      return (
        <input
          ref={register()}
          type="hidden"
          name={name}
          value={customValue[schemaItem.value]}
        />
      );

    return (
      <Grid
        item
        // xs={12}
        // sm={2}
        lg={schemaItem.lg}
      >
        {!schemaItem.blank ? (
          schemaItem.masked === true ? (
            <InputMasked
              classStyle={classes.paper}
              style={{ width: "100%" }}
              name={name}
              label={schemaItem.label}
              errors={errors[name]}
              control={control}
              mask={schemaItem.mask}
              rules={rules}
              onChange={
                schemaItem.onChange
                  ? (data) =>
                      schemaItem.onChange(
                        data,
                        `items[${index}].${schemaItem.name}`
                      )
                  : () => {}
              }
            />
          ) : (
            <TextFieldWithError
              style={{ width: "100%" }}
              errors={
                index !== ""
                  ? errors.items && errors.items[index][schemaItem.name]
                  : errors[name]
              }
              inputRef={register(schemaItem.rules)}
              name={name}
              label={schemaItem.label}
              variant="outlined"
              onBlur={
                schemaItem.onChange
                  ? (data) => schemaItem.onChange(data, index)
                  : () => {}
              }
            />
          )
        ) : null}
      </Grid>
    );
  });
}
