import React from "react";
import { instance } from "../../../services/api";
import Crud from "../../Crud";
import { LinearProgress } from "@material-ui/core";
import ModalAdicionar from "../../Crud/ModalAdicionar";
import EstoqueAdicionar from "./EstoqueAdicionar";

const schema = [
  { label: "C.A", content: "EPECA" },
  { label: "Epi", content: "EPIDESCRICAO" },
  { label: "Quantidade", content: "EPIQUANTIDADE" },
  { label: "Quantidade Mínima", content: "EPIQUANTIDADEMIN" },
  // { label: "Código", content: "nucleo.NUCCODIGO" },
];

export default function Estoque() {
  const [content, setContent] = React.useState();

  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    instance
      .get("/safety/epi/stock?EpiCa=&MinOnly=&Type=&Name=&Cnpj=")
      .then((reponse) => {
        setContent(reponse.data);
        console.log("response estoque", reponse.data);
      });
  }, []);
  return content ? (
    <div>
      <ModalAdicionar
        fullScreen
        cancelar={() => setOpenModal(false)}
        openModal={openModal}
      >
        {(buttons) => {
          return (
            <>
              <EstoqueAdicionar />
            </>
          );
        }}
      </ModalAdicionar>
      <Crud
        onNewClick={() => setOpenModal(true)}
        schema={schema}
        edit={true}
        content={content}
        title="Estoque"
      />
    </div>
  ) : (
    <LinearProgress />
  );
}
