import React from "react";
import { instance } from "../../../services/api";
import Crud from "../../Crud";
import { LinearProgress } from "@material-ui/core";

const schema = [
  { label: "Epi", content: "EPIDESCRICAO" },
  { label: "Quantidade", content: "EPIQUANTIDADE" },
  { label: "Quantidade Mínima", content: "EPIQUANTIDADEMIN" },
  // { label: "Código", content: "nucleo.NUCCODIGO" },
];

export default function Estoque() {
  const [content, setContent] = React.useState();
  React.useEffect(() => {
    instance
      .get("/safety/epi/stock?EpiCa=&MinOnly=&Type=&Name=&Cnpj=")
      .then((reponse) => {
        setContent(reponse.data);
        console.log("response estoque", reponse.data);
      });
  }, []);
  return content ? (
    <Crud schema={schema} edit={true} content={content} title="Estoque" />
  ) : (
    <LinearProgress />
  );
}
