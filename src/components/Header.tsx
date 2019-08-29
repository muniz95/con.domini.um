import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

interface IMenuEntry {
  name: string;
  url: string;
  icon: JSX.Element;
}

// tslint:disable-next-line: typedef
const styles = createStyles({
  appBar: {
    backgroundColor: "#f00",
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
  { name: "Achados & Perdidos", url:"lostfound", icon: <InboxIcon /> },
  { name: "Administradora", url:"administrator", icon: <InboxIcon /> },
  { name: "Assembleias", url:"", icon: <InboxIcon /> },
  { name: "Brigada de incêndio", url:"", icon: <InboxIcon /> },
  { name: "Caixa de sugestão", url:"", icon: <InboxIcon /> },
  { name: "Carona Solidária", url:"", icon: <InboxIcon /> },
  { name: "Classificados", url:"", icon: <InboxIcon /> },
  { name: "Colaboradores", url:"", icon: <InboxIcon /> },
  { name: "Correspondências", url:"", icon: <InboxIcon /> },
  { name: "Documentos", url:"", icon: <InboxIcon /> },
  { name: "Enquetes", url:"", icon: <InboxIcon /> },
  { name: "Eventos", url:"", icon: <InboxIcon /> },
  { name: "Galeria de fotos", url:"", icon: <InboxIcon /> },
  { name: "Lista de Acesso", url:"", icon: <InboxIcon /> },
  { name: "Mensagens", url:"", icon: <InboxIcon /> },
  { name: "Notificações", url:"", icon: <InboxIcon /> },
  { name: "Obras & Providências", url:"", icon: <InboxIcon /> },
  { name: "Ocorrências", url:"", icon: <InboxIcon /> },
  { name: "Quadro de Avisos", url:"", icon: <InboxIcon /> },
  { name: "Reservas", url:"", icon: <InboxIcon /> },
  { name: "Visita de Prestadores", url:"", icon: <InboxIcon /> },
  { name: "Votações", url:"", icon: <InboxIcon /> },
];

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
}

class Header extends React.Component<IProps, IState> {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side: string, open: boolean) => () => {
    this.setState({
      [side]: open,
    } as any);
  }

  render(): JSX.Element {
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