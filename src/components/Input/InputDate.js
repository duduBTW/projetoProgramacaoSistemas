import React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";

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
  label,
  classProp,
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        as={
          <KeyboardDatePicker
            fullWidth
            autoOk
            // error={!!errors}
            inputVariant="outlined"
            variant="inline"
            format="dd/MM/yyyy"
            label={label}
            // helperText={errors}
          />
        }
        control={control}
        name={name}
        placeholder={label}
      />
    </MuiPickersUtilsProvider>
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <Controller
    //     as={
    //       <KeyboardDatePicker
    //         label={label}
    //         autoOk={true}
    //         // disableToolbar
    //         format="dd/MM/yyyy"
    //         // views={["year", "month", "date"]}
    //         inputVariant="outlined"
    //         variant="inline"
    //         // margin="dense"
    //         InputAdornmentProps={{ position: "end" }}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         className={classProp}
    //         // error={errors}
    //       />
    //     }
    //     name={name}
    //     // defaultValue={myCustomObject?.opened_at}
    //     rules={{
    //       ...rules,
    //       // validate: {
    //       //   inputTelRequired: isValidField,
    //       // },
    //     }}
    //     control={control}
    //   />
    // </MuiPickersUtilsProvider>
  );
}
