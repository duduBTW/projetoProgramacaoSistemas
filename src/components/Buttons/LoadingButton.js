import React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    zIndex: "99",
  },
});

const LoadingButton = (props) => {
  const { classes, loading, done, disabled, ...other } = props;

  if (loading) {
    return (
      <Button
        endIcon={<CircularProgress size={24} />}
        className={classes.button}
        {...other}
        disabled
      />
    );
  } else {
    return <Button disabled={disabled} className={classes.button} {...other} />;
  }
};

export default withStyles(styles)(LoadingButton);
