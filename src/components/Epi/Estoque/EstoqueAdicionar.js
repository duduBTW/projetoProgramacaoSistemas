import React from "react";
import Form from "../../Form";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import StepperVertical from "../../Stepper/StepperVertical";
import AdicionarEpi from "../CriarFicha/AdicionarEpi";
import ArrayForm from "../../Form/ArrayForm";
import { instance } from "../../../services/api";

function getStepContent(
  step,
  setActiveStep,
  buttons,
  setItems,
  items,
  register,
  control,
  errors,
  handleSubmit,
  setValue,
  fields,
  append,
  remove,
  epiAutocomplete
) {
  switch (step) {
    case 0:
      return (
        <AdicionarEpi
          addItem={(items) => {
            setActiveStep(1);
            append(items);
            console.log("items", items);
          }}
          buttons={(itemFunc) => buttons(itemFunc)}
        />
      );
    case 1:
      return (
        <ArrayForm
          fields={fields}
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          buttons={buttons(() => {})}
          onSubmit={setItems}
          estoqueInfo={{}}
          remove={remove}
          setActiveStep={setActiveStep}
          schema={[
            {
              lg: 4,
              name: "ca",
              label: "C.A",
              rules: {
                required: "C.A obrigatório",
              },
              onChange: (e, index) => epiAutocomplete(e.target.value, index),
            },
            {
              lg: 2,
              name: "troca",
              label: "Dias para troca",
              rules: {
                required: "Campo obrigatório",
              },
            },
            {
              lg: 2,
              name: "validade",
              label: "Validade",
              rules: {
                required: "Campo obrigatório",
              },
              date: true,
            },
            // { blank: true, lg: 2 },
            {
              lg: 2,
              name: "quantidade",
              label: "Quantidade Disponível",
              rules: {
                required: "Campo obrigatório",
              },
            },
            {
              lg: 2,
              name: "quantidadeMin",
              label: "Quantidade Mínima",
              rules: {
                required: "Campo obrigatório",
              },
            },
            {
              lg: 12,
              name: "descricao",
              label: "Descrição Equipamento",
              rules: {
                required: "Campo obrigatório",
              },
            },
            {
              hidden: true,
              name: "epiNome",
              value: "EPINOME",
            },
            {
              hidden: true,
              name: "EPIID",
              value: "EPIID",
            },
            {
              hidden: true,
              name: "EPECODIGO",
              value: "EPECODIGO",
            },
          ]}
        />
      );
    default:
      return "Unknown step";
  }
}

const EstoqueAdicionar = () => {
  const [items, setItems] = React.useState([]);
  const { register, control, errors, handleSubmit, setValue } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const epiAutocomplete = (ca, index) => {
    if (ca)
      instance
        .get(`/safety/epi/epiinformation?EpiCa=${ca}`)
        .then((response) => {
          setValue(`items[${index}].descricao`, response.data.NomeEquipamento, {
            shouldValidate: true,
          });
          setValue(`items[${index}].vencimento`, response.data.DataValidade, {
            shouldValidate: true,
          });
          setValue(`items[${index}].vencimento`, response.data.DataValidade, {
            shouldValidate: true,
          });
        });
  };

  return (
    <StepperVertical
      control={control}
      stepChanged={(step) => {}}
      getStepContent={(step, setActiveStep, buttons) =>
        getStepContent(
          step,
          setActiveStep,
          buttons,
          setItems,
          items,
          register,
          control,
          errors,
          handleSubmit,
          setValue,
          fields,
          append,
          remove,
          epiAutocomplete
        )
      }
      steps={["Selecionar EPI's", "Preencher informações"]}
    />
  );
};

export default React.memo(EstoqueAdicionar);
