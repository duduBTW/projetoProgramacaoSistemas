import React from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
  Table,
  Paper,
  makeStyles,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    "& button": {
      margin: "20px 0px 10px 0px",
    },
    "& h5": {
      margin: "20px 0px 10px 0px",
    },
    marginTop: 20,
  },
  rootContent: {
    padding: "0px 20px",
  },
  error: {
    color: theme.palette.error.main,
    "&:focus": {
      outline: "none",
    },
  },
  tableRow: {
    cursor: "pointer",
  },
}));

export default function Crud({
  content,
  title,
  schema,
  onNewClick = () => {},
  onEditClick = () => {},
  onDeleteClick = () => {},
  edit = false,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper elevation={2} className={classes.rootContent}>
      <div className={classes.button}>
        <Typography variant="h5"> {title} </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onNewClick();
          }}
          // onClick={() => setOpenModal(true)}
          startIcon={<AddIcon />}
        >
          Novo
        </Button>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {schema.map((item) => (
                <TableCell align="left">
                  <b>{item.label}</b>
                </TableCell>
              ))}
              <TableCell align="left">
                <b>Ações</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.slice(page * 12, page * 12 + 12).map((item, index) => (
              <TableRow
                className={edit ? classes.tableRow : {}}
                // onClick={(e) =>
                //   history.push(`${history.location.pathname}/${item.PROCODIGO}`)
                // }
                hover={edit}
                onClick={() => {
                  onEditClick(item);
                }}
                key={index}
              >
                {schema.map((schameItem) => (
                  <>
                    <TableCell align="left">
                      {item[schameItem.content]}
                    </TableCell>
                  </>
                ))}
                <TableCell align="center" padding="checkbox">
                  <IconButton
                    onClick={(e) => {
                      // e.stopPropagation();

                      // setItemExcluir(item);
                      // setOpenModalConfirm(true);

                      onDeleteClick(item);
                    }}
                    aria-label="delete"
                    // color="delete"
                    className={classes.error}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={content.length}
        rowsPerPage={10}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={() => {}}
      />
    </Paper>
  );
}
