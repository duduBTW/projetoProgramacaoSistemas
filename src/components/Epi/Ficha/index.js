import React from "react";
import Search from "../../Search";
import { instance } from "../../../services/api";
import moment from "moment";

const Ficha = () => {
  const [loading, setLoding] = React.useState(false);
  const [content, setContent] = React.useState(null);

  const search = (data) => {
    console.log("data", data);
    setLoding(true);
    instance
      .get("safety/epi/GetEpiGuia", {
        params: {
          startDate: moment(data.startDate).format("MM/DD/YYYY"),
          endDate: moment(data.endDate).format("MM/DD/YYYY"),
          Page: 1,
        },
      })
      .then((response) => {
        console.log(response.data.Guia);
        setContent(response.data.Guia);
        setLoding(false);
      });
  };

  return (
    <div>
      <Search
        loading={loading}
        search={search}
        content={content}
        title="Ficha EPI"
        edit={true}
        fieldsContent={[
          { label: "Funcionário", content: "EpiGuiaHeader.FUNNOME" },
          // { label: "Código", content: "nucleo.NUCCODIGO" },
        ]}
        fieldsFilter={[
          { label: "Teste bla", name: "EPICODIGO" },
          { label: "Tipo", name: "EPITIPO" },
          { label: "Nome", name: "EPINOME" },
        ]}
        fieldsSearchMain={[
          {
            lg: 6,
            name: "startDate",
            label: "Data Inicial",
            rules: {
              required: "Campo obrigatório",
            },
            date: true,
          },
          {
            lg: 6,
            name: "endDate",
            label: "Data Final",
            rules: {
              required: "Campo obrigatório",
            },
            date: true,
          },
        ]}
      />
    </div>
  );
};

export default Ficha;
