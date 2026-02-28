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

export default function OfferRidePage() {
  const { data: records } = useRideRecords();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const offers = records?.filter((r) => r.category === 'offer') || [];

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#faa473' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Caronas disponíveis"
        >
          <Tab label="Ofereço carona" {...a11yProps(0)} />
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
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((item) => (
                <tr key={item.id}>
                  <td>{item.destiny}</td>
                  <td>{item.days.join(', ')}</td>
                  <td>{item.departure}</td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.Center>
      </TabPanel>
    </>
  );
}
