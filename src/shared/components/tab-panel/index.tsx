import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

const TabPanel = (props: {
  children?: ReactNode;
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
      {value === index && <Box p="md">{children}</Box>}
    </div>
  );
};

export default TabPanel;
