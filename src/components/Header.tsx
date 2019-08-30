import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Link } from "react-router-dom";

interface IMenuEntry {
  name: string;
  url: string;
  icon: JSX.Element;
}

// tslint:disable-next-line: typedef
const styles = createStyles({
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const menuEntries: IMenuEntry[] = [
  { name: "Achados & Perdidos", url: "lostfound", icon: <InboxIcon /> },
  { name: "Administradora", url: "administrator", icon: <InboxIcon /> },
  { name: "Assembleias", url: "assemblies", icon: <InboxIcon /> },
  { name: "Brigada de incêndio", url: "brigade", icon: <InboxIcon /> },
  { name: "Caixa de sugestão", url: "sugestions", icon: <InboxIcon /> },
  { name: "Carona Solidária", url: "ride", icon: <InboxIcon /> },
  { name: "Classificados", url: "smallads", icon: <InboxIcon /> },
  { name: "Colaboradores", url: "collaborators", icon: <InboxIcon /> },
  { name: "Correspondências", url: "mail", icon: <InboxIcon /> },
  { name: "Documentos", url: "documents", icon: <InboxIcon /> },
  { name: "Enquetes", url: "surveys", icon: <InboxIcon /> },
  { name: "Eventos", url: "events", icon: <InboxIcon /> },
  { name: "Galeria de fotos", url: "gallery", icon: <InboxIcon /> },
  { name: "Lista de Acesso", url: "accesslist", icon: <InboxIcon /> },
  { name: "Mensagens", url: "messages", icon: <InboxIcon /> },
  { name: "Notificações", url: "notifications", icon: <InboxIcon /> },
  { name: "Obras & Providências", url: "buildingsandprovidences", icon: <InboxIcon /> },
  { name: "Ocorrências", url: "occurrences", icon: <InboxIcon /> },
  { name: "Quadro de Avisos", url: "board", icon: <InboxIcon /> },
  { name: "Reservas", url: "reservations", icon: <InboxIcon /> },
  { name: "Visita de Prestadores", url: "providers", icon: <InboxIcon /> },
  { name: "Votações", url: "polls", icon: <InboxIcon /> },
];

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
}

class Header extends React.Component<IProps, IState> {
  public state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  public toggleDrawer = (side: string, open: boolean) => () => {
    this.setState({
      [side]: open,
    } as any);
  }

  public render(): JSX.Element {
    const { classes } = this.props;

    const sideList: JSX.Element = (
      <div className={classes.list}>
        <List>
          { menuEntries.map((entry, index) => (
            <Link to={`/${entry.url}`} key={entry.name}>
              <ListItem button key={index}>
                <ListItemIcon>{entry.icon}</ListItemIcon>
                <ListItemText primary={entry.name} />
              </ListItem>
            </Link>
          )) }
        </List>
      </div>
    );

    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={this.toggleDrawer("left", true)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
