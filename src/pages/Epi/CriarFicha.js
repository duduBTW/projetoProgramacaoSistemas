import React from "react";

import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormularioFuncionario from "../../components/Epi/CriarFicha/FormularioFuncionario";
import ConfirmarDados from "../../components/Epi/CriarFicha/ConfirmarDados";
import SelecionarEpi from "../../components/Epi/CriarFicha/SelecionarEpi";
import Sucesso from "../../components/Epi/CriarFicha/Sucesso";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formulario: {
    padding: 30,
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

function getSteps() {
  return ["Dados do funcionário", "Selecionar EPI's", "Confirmar Dados"];
}

function getStepContent(
  step,
  formData,
  getButtons,
  nextDados,
  funcionarioData,
  nextEpi,
  epis
) {
  switch (step) {
    case 0:
      return (
        <FormularioFuncionario
          // {...formData}
          buttons={getButtons}
          nextDados={nextDados}
        />
      );
    case 1:
      return <SelecionarEpi nextEpi={nextEpi} buttons={getButtons} />;
    case 2:
      return (
        <ConfirmarDados
          buttons={getButtons}
          data={funcionarioData}
          epis={epis}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function CriarFicha() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [funcionarioData, setFuncionarioData] = React.useState();
  const formData = useForm({
    defaultValues: funcionarioData,
  });
  const [epis, setEpis] = React.useState(null);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const nextDados = (dados) => {
    setFuncionarioData(dados);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const nextEpi = (dados) => {
    console.log("nextEpi", dados);
    setEpis(dados.items);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getButtons = (chustomChange) => {
    return (
      <div className={classes.actionsContainer}>
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={chustomChange ? chustomChange : handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
          </Button>
        </div>
      </div>
    );
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
                formData,
                getButtons,
                nextDados,
                funcionarioData,
                nextEpi,
                epis
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Sucesso epis={epis} funcionario={funcionarioData} />
      )}
    </div>
  );
}
