import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import GlobalStore from '../store';

interface IMenuEntry {
  name: string;
  url: string;
  icon: JSX.Element;
}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#faa473",
  },
  list: {
    width: 250,
  },
  listItemText: {
    fontSize: "0.9em",
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

const menuEntries: IMenuEntry[] = [
  { name: "Achados & Perdidos", url: "lostfound", icon: <InboxIcon /> },
  { name: "Administradora", url: "administrator", icon: <InboxIcon /> },
  { name: "Assembleias", url: "assemblies", icon: <InboxIcon /> },
  { name: "Brigada de incêndio", url: "brigade", icon: <InboxIcon /> },
  // { name: "Caixa de sugestão", url: "sugestions", icon: <InboxIcon /> },
  { name: "Carona Solidária", url: "ride", icon: <InboxIcon /> },
  { name: "Classificados", url: "smallads", icon: <InboxIcon /> },
  { name: "Colaboradores", url: "collaborators", icon: <InboxIcon /> },
  { name: "Correspondências", url: "mail", icon: <InboxIcon /> },
  { name: "Documentos", url: "documents", icon: <InboxIcon /> },
  { name: "Empregados", url: "employees", icon: <InboxIcon /> },
  { name: "Enquetes", url: "surveys", icon: <InboxIcon /> },
  { name: "Eventos", url: "events", icon: <InboxIcon /> },
  { name: "Lista de Acesso", url: "accesslist", icon: <InboxIcon /> },
  { name: "Mensagens", url: "messages", icon: <InboxIcon /> },
  { name: "Minha unidade", url: "unit", icon: <InboxIcon /> },
  {
    name: "Obras & Providências",
    url: "providences",
    icon: <InboxIcon />,
  },
  { name: "Ocorrências", url: "occurrences", icon: <InboxIcon /> },
  { name: "Perfil", url: "profile", icon: <InboxIcon /> },
  { name: "Pets", url: "pets", icon: <InboxIcon /> },
  { name: "Quadro de Avisos", url: "board", icon: <InboxIcon /> },
  { name: "Reservas", url: "reservations", icon: <InboxIcon /> },
  { name: "Veículos", url: "vehicles", icon: <InboxIcon /> },
  { name: "Visita de Prestadores", url: "providers", icon: <InboxIcon /> },
  { name: "Votações", url: "polls", icon: <InboxIcon /> },
];

type Anchor = "top" | "left" | "bottom" | "right";

export default function Header() {
  const globalStore = React.useContext(GlobalStore);
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const sideList: JSX.Element = (
    <div className={classes.list}>
      <List>
        {menuEntries.map((entry, index) => (
          <Link to={`/${entry.url}`} key={entry.name}>
            <ListItem button key={index}>
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText primary={entry.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuButton = globalStore.authenticated
    ? <IconButton
        onClick={toggleDrawer("right", true)}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
    : <></>;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await globalStore.logout();
    history.replace('/');
  }

  const authLink = globalStore.authenticated
    ? <Link to="" onClick={handleSubmit} color="inherit">Logout</Link>
    : <Link to="login" color="inherit">Login</Link>;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        { authLink }
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link to="">
            News
          </Link>
        </Typography>
        {menuButton}
      </Toolbar>
      <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          {sideList}
        </div>
      </Drawer>
    </AppBar>
  );
}

// export default withStyles(styles)(Header);
