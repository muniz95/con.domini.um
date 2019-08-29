import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const LostFound = React.lazy(() => import("./views/LostFound"));
const Administrator = React.lazy(() => import("./views/Administrator"));
const Assemblies = React.lazy(() => import("./views/Assemblies"));

const routes = [
  { exact: true, path: "", component: Home },
  { exact: false, path: "lostfound", component: LostFound },
  { exact: false, path: "administrator", component: Administrator },
  { exact: false, path: "assemblies", component: Assemblies },
];

export default routes;
