import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function StepperVertical({
  stepChanged,
  steps,
  getStepContent,
  finish,
  control,
}) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  // React.useEffect(() => {
  // }, []);
  const handleNext = () => {
    stepChanged(activeStep + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    stepChanged(activeStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index, setActiveStep, (func, submit = false) => (
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type={submit ? "submit" : "button"}
                      onClick={() => {
                        if(!submit) handleNext();
                        func();
                      }}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Finalizar"
                        : "Proximo"}
                    </Button>
                  </div>
                </div>
              ))}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && finish}
    </div>
  );
}
