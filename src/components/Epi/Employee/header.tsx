import React from "react";
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";

import { employeeItem } from "../../../pages/Employee/employee";
import DataShow from "components/Item/DataShow";

interface HeaderProps {
  content: employeeItem;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "20px 20px 10px 20px",
    },
    document: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "10px",
    },
    documentItem: {
      flex: 1,
      marginBottom: "5px",
    },
  })
);

const formatDate = (value: String) => {
  //@ts-ignore
  return moment(value).format("DD/MM/yyyy");
};

export default function Header({ content }: HeaderProps) {
  return (
    <DataShow
      editSchema={{}}
      onSubmitEdit={() =>
        new Promise<any>((resolve) =>
          setTimeout(() => {
            resolve();
            return "uwu";
          }, 1000)
        )
      }
      data={content}
      schema={[
        [{ label: "Nome", name: "FUNNOME" }],
        [{ label: "CPF", name: "FUNCPF" }],
        [{ label: "RG", name: "FUNRG" }],
        [
          {
            label: "Nascimento",
            name: "FUNNASCIMENTO",
            format: true,
            formatFun: formatDate,
          },
        ],
        [
          {
            label: "Admissão",
            name: "FUNADMISSAO",
            format: true,
            formatFun: formatDate,
          },
        ],
      ]}
    />
  );
  // <div>
  //   <div className={classes.document}>
  //     <div className={classes.documentItem}>
  //       <Typography variant="subtitle1"> Nome </Typography>
  //       <Typography variant="h6"> {content.FUNNOME}</Typography>
  //     </div>
  //   </div>
  //   <div className={classes.document}>
  //     <div className={classes.documentItem}>
  //       <Typography variant="subtitle1"> CPF </Typography>
  //       <Typography variant="h6">{content.FUNCPF}</Typography>
  //     </div>
  //   </div>
  //   <div className={classes.document}>
  //     <div className={classes.documentItem}>
  //       <Typography variant="subtitle1"> RG </Typography>
  //       <Typography variant="h6">{content.FUNRG}</Typography>
  //     </div>
  //   </div>

  //   <div className={classes.document}>
  //     <div className={classes.documentItem}>
  //       <Typography variant="subtitle1"> Nascimento </Typography>
  //       <Typography variant="h6">
  //         {moment(content.FUNNASCIMENTO).format("DD/MM/yyyy")}
  //       </Typography>
  //     </div>

  //   </div>
  //   <div className={classes.document}>

  //     <div className={classes.documentItem}>
  //       <Typography variant="subtitle1"> Admissão </Typography>
  //       <Typography variant="h6">
  //         {moment(content.FUNADMISSAO).format("DD/MM/yyyy")}
  //       </Typography>
  //     </div>
  //   </div>
  // </div>
  // );
}
