import {
  createStyles,
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import EpiUsados from "components/Epi/Employee/EpiUsados";
import Header from "components/Epi/Employee/header";
import React, { useEffect } from "react";
import { instance } from "services/api";
import { employeeItem } from "./employee";

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

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function Item({ match }: { match: any }) {
  const classes = useStyles();
  const { id } = match.params;
  const [content, setContent] = React.useState<employeeItem>();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    instance.get(`/safety/epi/employee?id=${id}`).then((response) => {
      setContent(response.data);
    });
  }, [id]);

  return content ? (
    <div>
      <Paper className={classes.root}>
        <Header content={content} />
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="EPI's em uso" />
            <Tab label="EPI's entregues" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div>
              <EpiUsados id={id} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
        </div>
      </Paper>
    </div>
  ) : (
    <div>Carregando...</div>
  );
}
