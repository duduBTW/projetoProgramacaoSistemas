import { Box, Tab, Tabs } from '@material-ui/core';
import React from 'react'
import QuantidadeMes from './Graficos/QuantidadeMes';
import QuantidadeTodal from './Graficos/QuantidadeTodal';
import History from './History';

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

export default function Body({data, id}: {data: any, id: string}) {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return <>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="HISTORICO" />
            <Tab label="GRÁFICOS" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <History data={data} />
          </TabPanel>
        <TabPanel value={value} index={1}> 
          <QuantidadeTodal data={data} />
          <QuantidadeMes id={id} />
        </TabPanel>
  </>
}
