import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const LostFound = React.lazy(() => import("./views/LostFound"));
const Administrator = React.lazy(() => import("./views/Administrator"));
const Assemblies = React.lazy(() => import("./views/Assemblies"));
const FirefighterBrigade = React.lazy(() => import("./views/FirefighterBrigade"));
const Ride = React.lazy(() => import("./views/Ride"));
const NeededRide = React.lazy(() => import("./views/Ride/needed"));
const OfferRide = React.lazy(() => import("./views/Ride/offer"));
const SmallAds = React.lazy(() => import("./views/SmallAds"));
const Collaborators = React.lazy(() => import("./views/Collaborators"));
const Mail = React.lazy(() => import("./views/Mail"));
const Documents = React.lazy(() => import("./views/Documents"));
const Surveys = React.lazy(() => import("./views/Surveys"));
const Events = React.lazy(() => import("./views/Events"));
const AccessList = React.lazy(() => import("./views/AccessList"));
const Messages = React.lazy(() => import("./views/Messages"));
const Providences = React.lazy(() => import("./views/Providences"));
const Occurrences = React.lazy(() => import("./views/Occurrences"));
const Board = React.lazy(() => import("./views/Board"));
const Reservations = React.lazy(() => import("./views/Reservations"));
const Providers = React.lazy(() => import("./views/Providers"));
const Polls = React.lazy(() => import("./views/Polls"));
const Login = React.lazy(() => import("./views/Login"));
const Pets = React.lazy(() => import("./views/Pets"));
const Vehicles = React.lazy(() => import("./views/Vehicles"));
const Employees = React.lazy(() => import("./views/Employees"));
const Profile = React.lazy(() => import("./views/Profile"));
const Unit = React.lazy(() => import("./views/Unit"));

const routes = [
  { exact: true, path: "", component: Home, isPrivate: true },
  { exact: false, path: "lostfound", component: LostFound, isPrivate: true },
  { exact: false, path: "administrator", component: Administrator, isPrivate: true },
  { exact: false, path: "assemblies", component: Assemblies, isPrivate: true },
  { exact: false, path: "brigade", component: FirefighterBrigade, isPrivate: true },
  // { exact: false, path: "sugestions", component: Sugestions, isPrivate: true },
  { exact: false, path: "ride/needed", component: NeededRide, isPrivate: true },
  { exact: false, path: "ride/offer", component: OfferRide, isPrivate: true },
  { exact: false, path: "ride", component: Ride, isPrivate: true },
  { exact: false, path: "smallads", component: SmallAds, isPrivate: true },
  { exact: false, path: "collaborators", component: Collaborators, isPrivate: true },
  { exact: false, path: "mail", component: Mail, isPrivate: true },
  { exact: false, path: "documents", component: Documents, isPrivate: true },
  { exact: false, path: "surveys", component: Surveys, isPrivate: true },
  { exact: false, path: "events", component: Events, isPrivate: true },
  { exact: false, path: "accesslist", component: AccessList, isPrivate: true },
  { exact: false, path: "messages", component: Messages, isPrivate: true },
  { exact: false, path: "providences", component: Providences, isPrivate: true },
  { exact: false, path: "occurrences", component: Occurrences, isPrivate: true },
  { exact: false, path: "board", component: Board, isPrivate: true },
  { exact: false, path: "reservations", component: Reservations, isPrivate: false },
  { exact: false, path: "providers", component: Providers, isPrivate: true },
  { exact: false, path: "polls", component: Polls, isPrivate: true },
  { exact: false, path: "login", component: Login, isPrivate: false },
  { exact: false, path: "pets", component: Pets, isPrivate: false },
  { exact: false, path: "vehicles", component: Vehicles, isPrivate: false },
  { exact: false, path: "employees", component: Employees, isPrivate: false },
  { exact: false, path: "profile", component: Profile, isPrivate: false },
  { exact: false, path: "unit", component: Unit, isPrivate: false },
];

export default routes;
