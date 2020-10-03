import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import GetAppIcon from "@material-ui/icons/GetApp";
import moment from "moment";

import Axios from "axios";

import { instance } from "../../../services/api";

export default function Sucesso({ epis, funcionario }) {
  const [guia, setGuia] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    console.log("aaaaaaaaaaa", {
      Date: "13/04/2020",
      IdModel: 0,
      Provider: {
        Id: 59927,
        Name: funcionario.nome,
        Birth: moment(funcionario.nascimento).format(),
        Admission: moment(funcionario.admissao).format(),
        Gender: 2,
        Gender_Description: "Feminino",
        Document_RG: funcionario.rg,
        Document_CPF: funcionario.cpf,
        Document_Matricula: 11,
        CompanyName: "Eliane e Bruno Pizzaria Ltda",
        alreadySchedulule: false,
      },
      EpiGuiaItem: epis,
    });
    instance
      .post("/safety/epi/putepi", {
        Date: "13/04/2020",
        IdModel: 0,
        Provider: {
          Id: funcionario.id || 0,
          Name: funcionario.nome,
          Birth: moment(funcionario.nascimento).format(),
          Admission: moment(funcionario.admissao).format(),
          Gender: funcionario.sexo,
          Gender_Description: funcionario.sexo === 2 ? "Feminino" : "Masculino",
          Document_RG: funcionario.rg,
          Document_CPF: funcionario.cpf,
          Document_Matricula: funcionario.matricula,
          CompanyName: "Eliane e Bruno Pizzaria Ltda",
          alreadySchedulule: false,
        },
        EpiGuiaItem: epis,
      })
      .then((response) => {
        setLoading(false);
        console.log("response.data", response.data);
        setGuia(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper style={{ padding: 20, margin: 30 }}>
      {loading ? (
        <>
          <center>
            <Typography variant="h2">Gerando Guia</Typography>
          </center>
          <br />
          <center>
            {" "}
            <CircularProgress />
          </center>
        </>
      ) : (
        <>
          {" "}
          <center>
            <Typography variant="h2">Ficha gerada com sucesso</Typography>
          </center>
          <center>
            <Button
              variant="contained"
              size="large"
              startIcon={<GetAppIcon />}
              onClick={() =>
                Axios({
                  url: "https://emparquivos.s3.amazonaws.com/" + guia,
                  method: "GET",
                  responseType: "blob", // important
                }).then((response) => {
                  const url = window.URL.createObjectURL(
                    new Blob([response.data])
                  );
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "file.zip");
                  document.body.appendChild(link);
                  link.click();
                })
              }
            >
              Baixar
            </Button>
          </center>
        </>
      )}
    </Paper>
  );
}
