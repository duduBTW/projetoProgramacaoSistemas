import React from "react";
import Form from "../../components/Form";
import { Link, Button } from "@material-ui/core";

interface loginProps {
  login: (value: React.SetStateAction<boolean>) => void;
}

export default function FormularioRegister({ login }: loginProps) {
  return (
    <div style={{ padding: "0px 50px" }}>
      <Form
        schema={[
          {
            lg: 4,
            name: "userName",
            label: "CPF/CNPJ da empresa",
            rules: { required: "Campo obrigatório" },
            masked: true,
            mask: "999.999.999-99",
          },
          {
            lg: 4,
            name: "userPass",
            label: "Razão social da empresa",
            rules: { required: "Campo obrigatório" },
          },
          {
            lg: 4,
            name: "tel",
            label: "Telefone da empresa",
            rules: { required: "Campo obrigatório" },
            type: "tel",
            masked: true,
            mask: "99999-9999",
          },
          {
            lg: 4,
            name: "cpf",
            label: "CPF",
            rules: { required: "Campo obrigatório" },
            masked: true,
            mask: "999.999.999-99",
          },
          {
            lg: 4,
            name: "Nome",
            label: "Nome",
            rules: { required: "Campo obrigatório" },
          },
          {
            lg: 4,
            name: "Email",
            label: "Email",
            rules: { required: "Campo obrigatório" },
            type: "email",
          },
          {
            lg: 4,
            name: "Senha",
            label: "Senha",
            rules: { required: "Campo obrigatório" },
            type: "password",
          },
          {
            lg: 4,
            name: "confirmarSenha",
            label: "Confirmar Senha",
            rules: { required: "Campo obrigatório" },
            type: "password",
          },
        ]}
        buttons={
          <div
          // style={{
          //   display: "flex",
          //   alignItems: "flex-end",
          //   justifyContent: "flex-end",
          // }}
          >
            <br />
            <Button
              style={{ width: "100%" }}
              size="large"
              variant="contained"
              color="primary"
            >
              Criar conta
            </Button>
          </div>
        }
      />
      <br />
      {/* @ts-ignore */}
      <center>
        {/* @ts-ignore */}
        <Link onClick={login}>Já possui uma conta?</Link>
        {/* @ts-ignore */}
      </center>
    </div>
  );
}
