import { createTheme, colorsTuple } from '@mantine/core';

const primaryColor = '#faa473';
const secondaryColor = '#930154';

const theme = createTheme({
  colors: {
    brand: colorsTuple(primaryColor),
    accent: colorsTuple(secondaryColor),
  },
  primaryColor: 'brand',
});

export default theme;
