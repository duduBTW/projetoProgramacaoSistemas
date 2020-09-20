import React from "react";
import History from "../../components/Epi/Estoque/History";
import Header, { AlertDialogTime } from "../../components/Epi/Estoque/Header";
import { useFetch } from "services/hook.js/useFetch";
import { CircularProgress } from "@material-ui/core";

export default function EpiItem({ match }) {
  const [openTime, setOpenTime] = React.useState(false);
  const { id } = match.params;
  console.log(id);
  const { data } = useFetch(`/safety/epi/stock/info?id=${id}`);

  console.log(data);
  return (
    <div>
      {data ? (
        <>
          <Header
            name={data.header.EPIDESCRICAO}
            quantidade={data.header.EPIQUANTIDADE}
            quantidadeMin={data.header.EPIQUANTIDADEMIN}
            ca={data.header.EPECA}
          />
          <History setOpenTime={setOpenTime} data={data.historico} />
        </>
      ) : (
        <CircularProgress />
      )}
      <AlertDialogTime open={openTime} setOpen={setOpenTime} />
    </div>
  );
}
