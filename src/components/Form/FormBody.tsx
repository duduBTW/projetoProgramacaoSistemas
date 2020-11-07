import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldWithError from "../Input/InputWithError";
import { Grid } from "@material-ui/core";
import { InputMasked } from "../Input/InputMasked";
import { Controller } from "react-hook-form";
import SelectWithError from "../Input/SelectWithError";
import InputDate from "../Input/InputDate";
import { FormBodyProps } from "./fotmTypes";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

function FormBody({
  // customValue,
  schema,
  register,
  control,
  errors,
  index = "",
  rules = {},
  customValue,
}: FormBodyProps) {
  const classes = useStyles();

  // const getItemsForm = (value: string, schemaItem: SchemaProps, name: string) => {
  //   switch (value) {
  //     case 'masked':
  //       return  <InputMasked
  //       classStyle={classes.paper}
  //       // @ts-ignore
  //       style={{ width: "100%" }}
  //       name={name}
  //       label={schemaItem.label}
  //       errors={errors[name]}
  //       control={control}
  //       mask={schemaItem.mask}
  //       rules={schemaItem.rules}
  //       onChange={(data: any) =>
  //         schemaItem.onChange
  //           ? schemaItem.onChange(
  //               data,
  //               `items[${index}].${schemaItem.name}`
  //             )
  //           : () => {}
  //       }
  //     />
  //     case 'select':
  //       return <SelectWithError
  //       FormControlProps={{
  //         // @ts-ignore
  //         className: classes.paper,
  //         variant: "outlined",
  //       }}
  //       name={name}
  //       label={schemaItem.label}
  //       rules={schemaItem.rules}
  //       Controller={Controller}
  //       control={control}
  //       errors={errors[name]}
  //     >
  //       {schemaItem.options}
  //     </SelectWithError>
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      {" "}
      {schema.map((schemaItem) => {
        const name =
          index !== "" ? `items[${index}].${schemaItem.name}` : schemaItem.name;

        if (schemaItem.hidden) {
          if (!customValue[schemaItem.value]) {
            return <input ref={register()} type="hidden" name={name} />;
          }

          return (
            <input
              ref={register()}
              type="hidden"
              name={name}
              value={customValue[schemaItem.value]}
            />
          );
        }

        return (
          <Grid
            item
            // xs={12}
            // sm={2}
            lg={schemaItem.lg}
          >
            {!schemaItem.blank ? (
              <>
                {schemaItem.masked && (
                  <InputMasked
                    classStyle={classes.paper}
                    // @ts-ignore
                    style={{ width: "100%" }}
                    name={name}
                    label={schemaItem.label}
                    errors={errors[name]}
                    control={control}
                    mask={schemaItem.mask}
                    rules={schemaItem.rules}
                    onChange={(data: any) =>
                      schemaItem.onChange
                        ? schemaItem.onChange(
                            data,
                            `items[${index}].${schemaItem.name}`
                          )
                        : () => {}
                    }
                  />
                )}

                {schemaItem.select && (
                  <SelectWithError
                    FormControlProps={{
                      // @ts-ignore
                      className: classes.paper,
                      variant: "outlined",
                    }}
                    name={name}
                    label={schemaItem.label}
                    rules={schemaItem.rules}
                    Controller={Controller}
                    control={control}
                    errors={errors[name]}
                  >
                    {schemaItem.options}
                    {/* {schemaItem.options.map((item, index) => (
                  <MenuItem key={index} value={item.NUCCODIGO}>
                    {item.NUCFANTASIA} - {item.NUCRAZAOSOCIAL}
                  </MenuItem>
                ))} */}
                  </SelectWithError>
                )}

                {schemaItem.date && (
                  <InputDate
                    // classProp={classes.paper}
                    name={name}
                    label={schemaItem.label}
                    // rules={schemaItem.rules}
                    control={control}
                    // errors={errors[name]}
                  />
                )}

                {!schemaItem.masked &&
                  !schemaItem.select &&
                  !schemaItem.date && (
                    <TextFieldWithError
                      multiline={schemaItem.row || false}
                      rows={schemaItem.row}
                      style={{ width: "100%" }}
                      errors={
                        index !== ""
                          ? errors.items && errors.items[index][schemaItem.name]
                          : errors[name]
                      }
                      inputRef={register(schemaItem.rules)}
                      name={name}
                      label={schemaItem.label}
                      variant={schemaItem.variant || "outlined"}
                      type={schemaItem.type || "text"}
                      onBlur={(data: any) =>
                        schemaItem.onChange
                          ? schemaItem.onChange(data, index)
                          : () => {}
                      }
                    />
                  )}
              </>
            ) : null}
          </Grid>
        );
      })}
    </>
  );
}

export default FormBody;
