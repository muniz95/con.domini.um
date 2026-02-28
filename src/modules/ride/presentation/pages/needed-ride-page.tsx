import { AppBar, Tab, Tabs, Box } from '@mui/material';
import { useState } from 'react';
import { useRideRecords } from '../hooks';
import FormOffer from '../components/form-offer';
import S from '../styles/ride.styled';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabPanel = (props: {
  children?: React.ReactNode;
  value: number;
  index: number;
}) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default function NeededRidePage() {
  const { data: records } = useRideRecords();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const needed = records?.filter((r) => r.category === 'need') || [];

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#faa473' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Caronas solicitadas"
        >
          <Tab label="Preciso de carona" {...a11yProps(0)} />
          <Tab label="Registros" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <FormOffer />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <S.Center>
          <S.Table>
            <thead>
              <tr>
                <th>Destino</th>
                <th>Dias</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {needed.map((item) => (
                <tr key={item.id}>
                  <td>{item.destiny}</td>
                  <td>{item.days.join(', ')}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.Center>
      </TabPanel>
    </>
  );
}
