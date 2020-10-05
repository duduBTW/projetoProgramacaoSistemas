import React, { useState } from "react";

import Search from "components/Search";
import { instance } from "services/api";
import { EmployeeDomain } from "./employee";

export default function Employee({ history }: { history: any }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = (data: EmployeeDomain) => {
    console.log(data);
    setLoading(true);
    instance
      .get(`/safety/epi/GetEmployeeWithEpis?Name=${data.Name}&Cpf=`)
      .then((response) => {
        setLoading(false);
        setContent(response.data);
        console.log("response.data", response.data);
      });
  };

  // @ts-ignore
  const itemClick = (data) => {
    console.log("dataUwU", data);
    history.push(`/funcionario/${data.Id}`);
  };

  return (
    <div>
      {/* @ts-ignore */}
      <Search
        loading={loading}
        search={search}
        content={content}
        crudProps={{ onEditClick: itemClick }}
        // title="Ficha EPI"
        edit={true}
        fieldsContent={[
          { label: "Nome", content: "Name" },
          { label: "CPF", content: "Document_CPF" },
          // { label: "Código", content: "nucleo.NUCCODIGO" },
        ]}
        fieldsFilter={[
          { label: "Teste bla", name: "EPICODIGO" },
          { label: "Tipo", name: "EPITIPO" },
          { label: "Nome", name: "EPINOME" },
        ]}
        fieldsSearchMain={[
          {
            lg: 12,
            name: "Name",
            label: "Nome funcionario",
            variant: "standard",
          },
        ]}
      />
    </div>
  );
}
