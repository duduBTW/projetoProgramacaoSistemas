import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

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
}));

interface SchemaDataShow {
  content: string,
  label: string,
  size?: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined,
}

interface DataShowProps {
  schema: Array<Array<SchemaDataShow>>,
  data: any
}

export default function DataShow({ schema, data }: DataShowProps) {
  const classes = useStyles();

  return schema.map(row => 
       <Grid className={classes.document} container>
        {row.map(rowItem => 
          <Grid className={classes.documentItem} item xs={rowItem.size || 12}>
            <Typography variant="subtitle1"> {rowItem.label} </Typography>
            <Typography variant="h6">
              {data[rowItem.content]}
            </Typography>
          </Grid> 
        )}
      </Grid>
  )
}
