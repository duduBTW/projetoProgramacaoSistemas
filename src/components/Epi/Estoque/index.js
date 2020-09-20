import React from "react";
import { instance } from "../../../services/api";
import Search from "../../Search";
import { LinearProgress, Button } from "@material-ui/core";
import ModalAdicionar from "../../Crud/ModalAdicionar";
import EstoqueAdicionar from "./EstoqueAdicionar";
// import { Search, Crud } from "material-ui-generic-components";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const schema = [
  { label: "C.A", content: "EPECA" },
  { label: "Epi", content: "EPIDESCRICAO" },
  { label: "Quantidade", content: "EPIQUANTIDADE" },
  { label: "Quantidade Mínima", content: "EPIQUANTIDADEMIN" },
  // { label: "Código", content: "nucleo.NUCCODIGO" },
];

export default function Estoque() {
  const [content, setContent] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [openModal, setOpenModal] = React.useState(false);
  const history = useHistory();

  // React.useEffect(() => {
  //   instance
  //     .get("/safety/epi/stock?EpiCa=&MinOnly=&Type=&Name=&Cnpj=")
  //     .then((reponse) => {
  //       setContent(reponse.data);
  //       console.log("response estoque", reponse.data);
  //     });
  // }, []);
  const search = () => {
    setLoading(true);
    instance
      .get("/safety/epi/stock?EpiCa=&MinOnly=&Type=&Name=&Cnpj=")
      .then((reponse) => {
        setContent(reponse.data);
        setLoading(false);
        console.log("response estoque", reponse.data);
      });
  };

  const redirectPage = (data) => {
    const { EPECODIGO } = data;
    history.push(`/epi/estoque/${EPECODIGO}`);
  };
  return (
    <div>
      <ModalAdicionar
        fullScreen
        cancelar={() => setOpenModal(false)}
        openModal={openModal}
        title="Adicionar Estoque"
      >
        {(buttons) => {
          return (
            <>
              <EstoqueAdicionar />
            </>
          );
        }}
      </ModalAdicionar>
      <Search
        loading={loading}
        fieldsContent={schema}
        title="Estoque"
        search={search}
        content={content}
        crudProps={{
          onEditClick: redirectPage,
        }}
        edit={true}
        // onClick={() => history.push("/estoque/2")}
        fieldsSearchMain={[
          {
            lg: 12,
            name: "func",
            label: "Nome Funcionário",
            // rules: {
            //   required: "Campo obrigatório",
            // },
          },
        ]}
        fieldsFilter={[
          { label: "Teste bla", name: "EPICODIGO" },
          { label: "Tipo", name: "EPITIPO" },
          { label: "Nome", name: "EPINOME" },
        ]}
        extraButtons={
          <>
            <Button
              startIcon={<AddIcon />}
              // className={classes.button}
              onClick={() => setOpenModal(true)}
              variant="contained"
              color="primary"
            >
              Novo
            </Button>
            <Button
              startIcon={<AddIcon />}
              // className={classes.button}
              onClick={() => history.push("/epi/estoque/2")}
              variant="contained"
              color="primary"
            >
              Pog
            </Button>
          </>
        }
      />
    </div>
  );
}
