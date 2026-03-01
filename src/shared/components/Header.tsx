import {
  Box,
  Burger,
  Drawer,
  Group,
  NavLink,
  ScrollArea,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconInbox } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface IMenuEntry {
  name: string;
  url: string;
}

const menuEntries: IMenuEntry[] = [
  { name: 'Achados & Perdidos', url: 'lostfound' },
  { name: 'Administradora', url: 'administrator' },
  { name: 'Assembleias', url: 'assemblies' },
  { name: 'Brigada de incêndio', url: 'brigade' },
  // { name: "Caixa de sugestão", url: "sugestions" },
  { name: 'Carona Solidária', url: 'ride' },
  { name: 'Classificados', url: 'smallads' },
  { name: 'Colaboradores', url: 'collaborators' },
  { name: 'Correspondências', url: 'mail' },
  { name: 'Documentos', url: 'documents' },
  { name: 'Empregados', url: 'employees' },
  { name: 'Enquetes', url: 'surveys' },
  { name: 'Eventos', url: 'events' },
  { name: 'Lista de Acesso', url: 'accesslist' },
  { name: 'Mensagens', url: 'messages' },
  { name: 'Minha unidade', url: 'unit' },
  {
    name: 'Obras & Providências',
    url: 'providences',
  },
  { name: 'Ocorrências', url: 'occurrences' },
  { name: 'Perfil', url: 'profile' },
  { name: 'Pets', url: 'pets' },
  { name: 'Quadro de Avisos', url: 'board' },
  { name: 'Reservas', url: 'reservations' },
  { name: 'Veículos', url: 'vehicles' },
  { name: 'Visita de Prestadores', url: 'providers' },
  { name: 'Votações', url: 'polls' },
];

export default function Header() {
  const [opened, setOpened] = React.useState(false);

  return (
    <Box
      px="md"
      py="sm"
      style={(theme) => ({
        backgroundColor: theme.colors.brand[6],
        color: theme.white,
      })}
    >
      <Group justify="space-between" align="center">
        <Link to="login" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Text fw={600}>Login</Text>
        </Link>
        <Link to="" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Text fw={700} size="lg">
            News
          </Text>
        </Link>
        <Burger
          opened={opened}
          onClick={() => setOpened((current) => !current)}
          aria-label="Menu"
          color="white"
        />
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        title="Menu"
        size="xs"
      >
        <ScrollArea.Autosize mah="70vh">
          {menuEntries.map((entry) => (
            <UnstyledButton
              key={entry.name}
              component={Link}
              to={`/${entry.url}`}
              onClick={() => setOpened(false)}
              style={{ display: 'block', width: '100%' }}
            >
              <NavLink
                label={entry.name}
                leftSection={<IconInbox size={16} stroke={1.5} />}
                component="div"
              />
            </UnstyledButton>
          ))}
        </ScrollArea.Autosize>
      </Drawer>
    </Box>
  );
}
