import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Formulario from "./Formulario";
import SelecionarEmpresa from "./SelecionarEmpresa";
import LoadingButton from "../../components/Buttons/LoadingButton";
import { instance } from "../../services/api";

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
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Informações", "Selecione a Empresa"];
}

function getStepContent(
  step,
  buttons,
  handleFinish,
  handleNextUserForm,
  response,
  setLoading
) {
  switch (step) {
    case 0:
      return (
        <div style={{ margin: "200px 0px 0px 0px" }}>
          <Formulario
            setLoading={setLoading}
            buttons={buttons}
            handleNext={handleNextUserForm}
          />
        </div>
      );
    case 1:
      return (
        <div>
          {response && (
            <SelecionarEmpresa
              setLoading={setLoading}
              handleNext={handleFinish}
              buttons={buttons}
              acessData={response}
            />
          )}
        </div>
      );

    default:
      return "Unknown step";
  }
}

export default function LoginForm({ history, setLogged }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [reponse, setReponse] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const steps = getSteps();

  const handleNextUserForm = (data) => {
    console.log("data", data);
    setReponse(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = (token) => {
    setLogged(true);
    history.push("/inicio");
  };

  const handleBack = () => {
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
              {getStepContent(
                index,
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Voltar
                    </Button>
                    <LoadingButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      // onClick={handleNext}
                      className={classes.button}
                      loading={loading}
                    >
                      {activeStep === steps.length - 1
                        ? "Finalizar"
                        : "Próximo"}
                    </LoadingButton>
                  </div>
                </div>,
                handleFinish,
                handleNextUserForm,
                reponse,
                setLoading
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
