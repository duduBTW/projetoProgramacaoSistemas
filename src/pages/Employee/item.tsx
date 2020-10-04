import { createStyles, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { instance } from "services/api";

interface employeeItem {
  FUNNOME: string;
  FUNCPF?: number;
  FUNMATRICULA?: number;
  FUNRG?: number;
  FUNADMISSAO: string;
  FUNNASCIMENTO: string;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    document: {
      display: "flex",
      flexDirection: "row",
    },
    documentItem: {
      flex: 1,
    },
  })
);

export default function Item({ match }: { match: any }) {
  const classes = useStyles();
  const { id } = match.params;
  const [content, setContent] = React.useState<employeeItem>();

  useEffect(() => {
    instance.get(`/safety/epi/employee?id=${id}`).then((response) => {
      setContent(response.data);
    });
  }, [id]);
  return content ? (
    <div>
      <Paper className={classes.root}>
        {/* @ts-ignore */}
        <Typography variant="subtitle1"> Nome </Typography>
        <Typography variant="h5"> {content.FUNNOME}</Typography>
        <div className={classes.document}>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> CPF </Typography>
            <Typography variant="h5">{content.FUNCPF}</Typography>
          </div>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> RG </Typography>
            <Typography variant="h5">{content.FUNRG}</Typography>
          </div>
        </div>

        <div className={classes.document}>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> Nascimento </Typography>
            <Typography variant="h5">{content.FUNNASCIMENTO}</Typography>
          </div>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> Admissão </Typography>
            <Typography variant="h5">{content.FUNADMISSAO}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  ) : (
    <div>Carregando...</div>
  );
}
