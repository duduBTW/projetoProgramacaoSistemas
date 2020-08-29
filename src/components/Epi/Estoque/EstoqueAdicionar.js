import React from "react";
import Form from "../../Form";
import StepperVertical from "../../Stepper/StepperVertical";
import AdicionarEpi from "../CriarFicha/AdicionarEpi";
import ArrayForm from "../../Form/ArrayForm";

function getStepContent(step, setActiveStep) {
  switch (step) {
    case 0:
      return (
        <AdicionarEpi
          addItem={(items) => {
            setActiveStep(1);
            console.log("items", items);
          }}
        />
      );
    case 1:
      return <div></div>;
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function EstoqueAdicionar() {
  return (
    <StepperVertical
      stepChanged={(step) => {}}
      getStepContent={getStepContent}
      steps={["Select campaign settings", "Create an ad group"]}
    />
  );
}
