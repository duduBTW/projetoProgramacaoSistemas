import {
  createStyles,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "10px 10px 0px 10px",
      display: "flex"
    },
  })
);

export default function ItemContainer({itemContainer, itemDetails, sizeContainer = 4, sizeDetails = 1, height = "68vh", paddingHeader = "20px" }: {
  itemContainer: any,
  itemDetails: any,
  sizeContainer?: number,
  sizeDetails?: number,
  height?: string,
  paddingHeader?: string 
}) {
  const classes = useStyles()

  return <div>
      <div style={{}} className={classes.root}>
        <Paper style={{flex: sizeContainer, marginRight: 20}}>
          {itemContainer}
        </Paper>
        <Paper style={{flex: sizeDetails, padding: paddingHeader, position: "sticky", maxHeight: height, top: 80}}>
         {itemDetails}
        </Paper>
      </div>
    </div>
}
