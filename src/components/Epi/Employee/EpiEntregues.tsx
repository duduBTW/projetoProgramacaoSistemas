import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Guia } from "../ficha";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GetAppIcon from "@material-ui/icons/GetApp";
import moment from "moment";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import { Guia } from "../ficha";
import {
  Button,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useFetch } from "services/hook.js/useFetch";
import ModalConfirm from "components/Crud/ModalConfirm";
import { instance } from "services/api";
import LoadingButton from "components/Buttons/LoadingButton";

interface EpiUsadosProps {
  id: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  root: {
    justifyContent: "center",
    flex: 1,
    margin: "0px 0px 20px 0px",
  },
  media: {
    height: 150,
    // paddingTop: "56.25%", // 16:9
  },
  mediaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  column: {
    display: "flex",
    flexDirection: "row",
  },
  columnMetade: {
    flex: 2,
  },
  checkbox: {
    marginLeft: "0px",
  },
  document: {
    display: "flex",
    flexDirection: "row",
    margin: "0px 10px",
  },
  documentItem: {
    flex: 1,
    marginBottom: "5px",
  },
  card: {
    padding: "10px 10px 0px 10px",
    margin: "0px 0px 20px 0px",
    position: "relative",
  },
  cardContent: {
    margin: "0px 15px 15px 15px",
    padding: "10px 10px 0px 10px",
    "&:last-child": {
      padding: "0px",
    },
  },
  checkboxItem: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    position: "sticky",
    top: 60,
    "& button": {
      margin: "0px 0px 10px 15px",
    },
  },
  nothingContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    marginTop: 40,
  },
  subTitle: {
    marginTop: 25,
    padding: "0px 50px",
  },
}));

export interface ChangeStatus {
  id?: string;
  idPara?: string;
  type?: string;
  status?: string;
}

export default function EpiEntregues({ id }: EpiUsadosProps) {
  const trigger = useScrollTrigger();
  const classes = useStyles();

  // const [data, setContent] = React.useState<Array<Guia>>();
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const [expanded, setExpanded] = React.useState<Array<number>>([]);
  const [item, setItem] = React.useState<Array<number> | null>(null);
  const [list, setList] = React.useState<Array<number> | null>(null);
  const [loadingButton, setLoadingButton] = React.useState<boolean>(false);
  const enabled: boolean = list && list.length | item?.length ? false : true;

  const { data } = useFetch<Array<Guia>>(
    `/safety/epi/employee/getEpi?id=${id}&status=2`
  );
  const handleExpandClick = (index: number) => {
    const exists = expanded.includes(index);

    if (!exists) {
      setExpanded([...expanded, index]);
    } else {
      const newArray = expanded.filter((item) => item !== index);
      setExpanded(newArray);
    }
  };

  const handleChangeList = (index: number) => {
    const exists = list.includes(index);

    if (!exists) {
      setList([...list, index]);
    } else {
      const newArray = list.filter((item) => item !== index);
      setList(newArray);
    }
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeItem = (index: number) => {
    const exists = item.includes(index);

    if (!exists) {
      setItem([...item, index]);
    } else {
      const newArray = item.filter((item) => item !== index);
      setItem(newArray);
    }
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  // React.useEffect(() => {
  //   instance
  //     .get(`/safety/epi/employee/getEpi?id=${id}&status=1`)
  //     .then((response) => {
  //       setContent(response.data);
  //     });
  // }, [id]);

  return (
    <div>
      {data ? (
        data.length > 0 ? (
          data.map((guia, index) => (
            <div className={classes.container}>
              <Card className={classes.root}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={moment(guia.EpiGuiaHeader.FIEDATA).format(
                    "DD/MM/yyyy"
                  )}
                />
                <div className={classes.column}>
                  <List
                    component="nav"
                    className={classes.columnMetade}
                    aria-label="secondary mailbox folders"
                  >
                    {guia.EpiGuiaHeader.Files.map((file) => (
                      <ListItem button>
                        <ListItemIcon>
                          <GetAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={file.ARQNOME} />
                      </ListItem>
                    ))}
                  </List>
                  <div className={classes.mediaContainer}>
                    <img
                      className={classes.media}
                      src={`https://chart.apis.google.com/chart?cht=qr&chld=0|0&chs=150x150&chl=${guia.EpiGuiaHeader.FIEQRCODE}`}
                    />
                  </div>
                </div>

                {/* <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent> */}
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded.includes(index),
                    })}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded.includes(index)}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={expanded.includes(index)}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent className={classes.cardContent}>
                    {guia.EpiGuiaDetalhesItem.map((detalhes) => (
                      <Card className={classes.card}>
                        {" "}
                        <div className={classes.document}>
                          <div className={classes.documentItem}>
                            <Typography variant="subtitle1"> Nome </Typography>
                            <Typography variant="h6">
                              {" "}
                              {detalhes.EPINOME}
                            </Typography>
                          </div>
                          <div className={classes.documentItem}>
                            <Typography variant="subtitle1"> C.A </Typography>
                            <Typography variant="h6">
                              {" "}
                              {detalhes.FIECA}
                            </Typography>
                          </div>
                        </div>
                        <div className={classes.document}>
                          <div className={classes.documentItem}>
                            <Typography variant="subtitle1">
                              {" "}
                              Quantidade{" "}
                            </Typography>
                            <Typography variant="h6">
                              {detalhes.FIEQUANTIDADE}
                            </Typography>
                          </div>
                          <div className={classes.documentItem}>
                            <Typography variant="subtitle1"> Troca</Typography>
                            <Typography variant="h6">
                              {detalhes.FIETROCA}
                            </Typography>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          ))
        ) : (
          <div className={classes.nothingContainer}>
            <Typography variant="h4">Nenhum EPI entregue</Typography>
            {/* 
            //@ts-ignore */}
            <center>
              <Typography className={classes.subTitle} variant="subtitle1">
                Caso o funcionário não esteja mais usando um equipamento
                selecione a opção <b>"Devolver"</b> ou <b>"Trocar"</b> na aba{" "}
                <b>"EPI'S EM USO"</b>{" "}
              </Typography>
              {/* 
            //@ts-ignore */}
            </center>
          </div>
        )
      ) : (
        <div>Carregando</div>
      )}
    </div>
  );
}
