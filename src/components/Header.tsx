import { Inbox, Menu } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IMenuEntry {
  name: string;
  url: string;
  icon: JSX.Element;
}

const menuEntries: IMenuEntry[] = [
  { name: 'Achados & Perdidos', url: 'lostfound', icon: <Inbox /> },
  { name: 'Administradora', url: 'administrator', icon: <Inbox /> },
  { name: 'Assembleias', url: 'assemblies', icon: <Inbox /> },
  { name: 'Brigada de incêndio', url: 'brigade', icon: <Inbox /> },
  // { name: "Caixa de sugestão", url: "sugestions", icon: <Inbox /> },
  { name: 'Carona Solidária', url: 'ride', icon: <Inbox /> },
  { name: 'Classificados', url: 'smallads', icon: <Inbox /> },
  { name: 'Colaboradores', url: 'collaborators', icon: <Inbox /> },
  { name: 'Correspondências', url: 'mail', icon: <Inbox /> },
  { name: 'Documentos', url: 'documents', icon: <Inbox /> },
  { name: 'Empregados', url: 'employees', icon: <Inbox /> },
  { name: 'Enquetes', url: 'surveys', icon: <Inbox /> },
  { name: 'Eventos', url: 'events', icon: <Inbox /> },
  { name: 'Lista de Acesso', url: 'accesslist', icon: <Inbox /> },
  { name: 'Mensagens', url: 'messages', icon: <Inbox /> },
  { name: 'Minha unidade', url: 'unit', icon: <Inbox /> },
  {
    name: 'Obras & Providências',
    url: 'providences',
    icon: <Inbox />,
  },
  { name: 'Ocorrências', url: 'occurrences', icon: <Inbox /> },
  { name: 'Perfil', url: 'profile', icon: <Inbox /> },
  { name: 'Pets', url: 'pets', icon: <Inbox /> },
  { name: 'Quadro de Avisos', url: 'board', icon: <Inbox /> },
  { name: 'Reservas', url: 'reservations', icon: <Inbox /> },
  { name: 'Veículos', url: 'vehicles', icon: <Inbox /> },
  { name: 'Visita de Prestadores', url: 'providers', icon: <Inbox /> },
  { name: 'Votações', url: 'polls', icon: <Inbox /> },
];

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const sideList: JSX.Element = (
    <div>
      <List>
        {menuEntries.map((entry, index) => (
          <Link to={`/${entry.url}`} key={entry.name}>
            <ListItem key={index}>
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText primary={entry.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const menuButton = (
    <IconButton
      onClick={toggleDrawer('right', true)}
      color="inherit"
      aria-label="Menu"
    >
      <Menu />
    </IconButton>
  );

  const authLink = (
    <Link to="login" color="inherit">
      Login
    </Link>
  );
  return (
    <AppBar position="static">
      <Toolbar>
        {authLink}
        <Typography variant="h6" color="inherit">
          <Link to="">News</Link>
        </Typography>
        {menuButton}
      </Toolbar>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </Drawer>
    </AppBar>
  );
}

// export default withStyles(styles)(Header);
