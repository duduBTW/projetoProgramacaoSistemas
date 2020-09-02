import React from "react";
import Form from "../../components/Form";
import { instance } from "../../services/api";
import { Link } from "@material-ui/core";

export default function Formulario({
  buttons,
  handleNext,
  setLoading,
  register,
}) {
  const login = (data) => {
    setLoading(true);
    instance
      .post("/auth/user", {
        ...data,
        companyID: 0,
        product: "PortalWeb",
        App: "PortalWeb",
      })
      .then((response) => {
        setLoading(false);
        if (response.data.Authenticated) {
          handleNext({ ...response.data, ...data });
        }
        console.log("response.data", response.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Form
        schema={[
          {
            lg: 12,
            name: "userName",
            label: "E-mail",
            rules: { required: "Campo obrigatório" },
            type: "email",
          },
          {
            lg: 12,
            name: "userPass",
            label: "Senha",
            rules: { required: "Campo obrigatório" },
            type: "password",
          },
        ]}
        buttons={<div style={{ marginTop: "15vh" }}>{buttons}</div>}
        onSubmit={login}
      />
      <center>
        {" "}
        <Link onClick={register}> Não possui uma conta? </Link>{" "}
      </center>
    </div>
  );
}
