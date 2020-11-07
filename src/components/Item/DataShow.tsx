import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import Form from "components/Form";
import LoadingButton from "components/Buttons/LoadingButton";

const useStyles = makeStyles((theme) => ({
  document: {
    margin: "0px 10px",
  },
  documentItem: {
    marginBottom: "5px",
  },
  card: {
    padding: "10px 10px 0px 10px",
    margin: "0px 0px 20px 0px",
    position: "relative",
  },
  button: {
    width: "100%",
    marginTop: 15,
  },
}));

interface SchemaDataShow {
  formatFun?: (data: String) => String;
  format?: boolean;
  name: string;
  label: string;
  size?:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
}

interface DataShowProps {
  schema: Array<Array<SchemaDataShow>>;
  data: any;
  editSchema: any;
  onSubmitEdit: (data: any) => Promise<any>;
}

export default function DataShow({
  schema,
  data,
  editSchema,
  onSubmitEdit,
}: DataShowProps) {
  const classes = useStyles();
  const [edit, setedit] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  return !edit ? (
    <>
      {schema.map((row) => (
        <Grid className={classes.document} container>
          {row.map((rowItem, index) => (
            <Grid className={classes.documentItem} item xs={rowItem.size || 12}>
              <Typography variant="subtitle1"> {rowItem.label} </Typography>
              <Typography variant="h6">
                {" "}
                {rowItem.format
                  ? rowItem.formatFun(data[rowItem.name])
                  : data[rowItem.name]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => setedit(true)}
      >
        Editar
      </Button>
    </>
  ) : (
    //@ts-ignore
    <Form
      defaultValues={data}
      onSubmit={(data) => {
        setLoadingButton(true);
        onSubmitEdit(data).then(() => {
          setLoadingButton(false);
          setedit(false);
        });
      }}
      //@ts-ignore
      schema={editSchema}
      buttons={
        <>
          <LoadingButton
            loading={loadingButton}
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Salvar
          </LoadingButton>
          <Button
            variant="text"
            className={classes.button}
            onClick={() => setedit(false)}
          >
            Cancelar
          </Button>
        </>
      }
    />
  );
}
