import React from "react";
import History from "../../components/Epi/Estoque/History";
import Header, { AlertDialogTime } from "../../components/Epi/Estoque/Header";
import { useFetch } from "services/hook.js/useFetch";
import { CircularProgress } from "@material-ui/core";
import ItemContainer from "components/Item/ItemContainer";
import Body from "components/Epi/Estoque/Body";

export default function EpiItem({ match }) {
  const [openTime, setOpenTime] = React.useState(false);
  const { id } = match.params;
  console.log(id);
  const { data } = useFetch(`/safety/epi/stock/info?id=${id}`);

  console.log(data);
  return (
    <div>
      {data ? (
        <ItemContainer
          paddingHeader={"15px"}
          itemContainer={<Body id={id} data={data.historico} />}
          itemDetails={
            <>
              <Header epecodigo={id} data={data.header} />
            </>
          }
        />
      ) : (
        <CircularProgress />
      )}
      <AlertDialogTime open={openTime} setOpen={setOpenTime} />
    </div>
  );
}
