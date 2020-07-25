import { observer } from "mobx-react";
import React from "react";
import S from "./styled";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SmallAds: React.FC<{}> = observer(() => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  
  return (
    <React.Fragment>
      <h2>Classificados</h2>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Anúncios" {...a11yProps(0)} />
          <Tab label="Meus anúncios" {...a11yProps(1)} />
          <Tab label="Novo anúncio" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </React.Fragment>
  );
});

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any; }) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default SmallAds;
