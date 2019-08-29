import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const LostFound = React.lazy(() => import("./views/LostFound"));
const Administrator = React.lazy(() => import("./views/Administrator"));
const Assemblies = React.lazy(() => import("./views/Assemblies"));
const FirefighterBrigade = React.lazy(() => import("./views/FirefighterBrigade"));
const Sugestions = React.lazy(() => import("./views/Sugestions"));
const Ride = React.lazy(() => import("./views/Ride"));
const SmallAds = React.lazy(() => import("./views/SmallAds"));
const Collaborators = React.lazy(() => import("./views/Collaborators"));
const Mail = React.lazy(() => import("./views/Mail"));
const Documents = React.lazy(() => import("./views/Documents"));
const Surveys = React.lazy(() => import("./views/Surveys"));
const Events = React.lazy(() => import("./views/Events"));
const Gallery = React.lazy(() => import("./views/Gallery"));
const AccessList = React.lazy(() => import("./views/AccessList"));
const Messages = React.lazy(() => import("./views/Messages"));
const Notifications = React.lazy(() => import("./views/Notifications"));
const BuildingsAndProvidences = React.lazy(() => import("./views/BuildingsAndProvidences"));
const Occurrences = React.lazy(() => import("./views/Occurrences"));
const Board = React.lazy(() => import("./views/Board"));
const Reservations = React.lazy(() => import("./views/Reservations"));
const Providers = React.lazy(() => import("./views/Providers"));
const Polls = React.lazy(() => import("./views/Polls"));

const routes = [
  { exact: true, path: "", component: Home },
  { exact: false, path: "lostfound", component: LostFound },
  { exact: false, path: "administrator", component: Administrator },
  { exact: false, path: "assemblies", component: Assemblies },
  { exact: false, path: "brigade", component: FirefighterBrigade },
  { exact: false, path: "sugestions", component: Sugestions },
  { exact: false, path: "ride", component: Ride },
  { exact: false, path: "smallads", component: SmallAds },
  { exact: false, path: "collaborators", component: Collaborators },
  { exact: false, path: "mail", component: Mail },
  { exact: false, path: "documents", component: Documents },
  { exact: false, path: "surveys", component: Surveys },
  { exact: false, path: "events", component: Events },
  { exact: false, path: "gallery", component: Gallery },
  { exact: false, path: "accesslist", component: AccessList },
  { exact: false, path: "messages", component: Messages },
  { exact: false, path: "notifications", component: Notifications },
  { exact: false, path: "buildingsandprovidences", component: BuildingsAndProvidences },
  { exact: false, path: "occurrences", component: Occurrences },
  { exact: false, path: "board", component: Board },
  { exact: false, path: "reservations", component: Reservations },
  { exact: false, path: "providers", component: Providers },
  { exact: false, path: "polls", component: Polls },
];

export default routes;
