import React from "react";
import { instance } from "../../services/api";
import { CircularProgress, Typography, MenuItem } from "@material-ui/core";
import Form from "../../components/Form";

export default function SelecionarEmpresa({
  acessData,
  handleNext,
  setLoading,
  buttons,
}) {
  const [companys, setCompanys] = React.useState(null);
  React.useEffect(() => {
    console.log("acessData.AccessToken", acessData.AccessToken);
    instance
      .get("/users/company?companyid=0", {
        headers: {
          Authorization: acessData.AccessToken,
        },
      })
      .then((response) => {
        setCompanys(response.data);
      })
      .catch((response) => console.log("response.data", response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginEmpresa = (data) => {
    setLoading(true);
    const { userName, userPass } = acessData;

    instance
      .post("/auth/user", {
        userName,
        userPass,
        companyID: data.company,
        product: "PortalWeb",
        App: "PortalWeb",
      })
      .then((response) => {
        setLoading(false);
        if (response.data.Authenticated) {
          instance.defaults.headers.common.Authorization =
            response.data.AccessToken;
          console.log("response.data.AccessToken", response.data.AccessToken);
          handleNext(response.data.AccessToken);
        }
      });
  };

  return !companys ? (
    <center style={{ margin: "15vh 0px" }}>
      <Typography variant="h5"> Carregando empresas... </Typography>
      <br />
      <CircularProgress />
    </center>
  ) : (
    <div style={{ marginTop: "15vh" }}>
      <Form
        schema={[
          {
            lg: 12,
            select: true,
            name: "company",
            label: "Empresa",
            rules: { required: "Campo obrigatório" },
            options: companys.map((company, index) => (
              <MenuItem key={index} value={company.CompanyId}>
                {company.CompanyDocument} - {company.CompanyName}
              </MenuItem>
            )),
          },
        ]}
        onSubmit={loginEmpresa}
        buttons={<div style={{ marginTop: "15vh" }}>{buttons}</div>}
      />
    </div>
  );
}
