import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Guia } from "../ficha";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GetAppIcon from "@material-ui/icons/GetApp";
import moment from "moment";
// import { Guia } from "../ficha";

import { instance } from "services/api";
import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

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
    margin: "20px 0px",
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
}));

export default function EpiUsados({ id }: EpiUsadosProps) {
  const classes = useStyles();

  const [content, setContent] = React.useState<Array<Guia>>();
  const [expanded, setExpanded] = React.useState<Array<number>>([]);

  const handleExpandClick = (index: number) => {
    const exists = expanded.includes(index);

    if (!exists) {
      setExpanded([...expanded, index]);
    } else {
      const newArray = expanded.filter((item) => item !== index);
      setExpanded(newArray);
    }
  };

  const handleChange = (event: any) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    instance
      .get(`/safety/epi/employee/getEpi?id=${id}&status=1`)
      .then((response) => {
        setContent(response.data);
      });
  }, [id]);
  return (
    <div>
      {content ? (
        content.map((guia, index) => (
          <div className={classes.container}>
            <Card className={classes.root}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={moment(guia.EpiGuiaHeader.FIEDATA).format("DD/MM/yyyy")}
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
                <FormControlLabel
                  className={classes.checkbox}
                  control={
                    <Checkbox
                      checked={false}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Selecionar todos"
                />
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
                <CardContent>
                  {guia.EpiGuiaDetalhesItem.map((detalhes) => (
                    <Card>
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
        <div>Carregando</div>
      )}
    </div>
  );
}
