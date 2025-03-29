import React from 'react';
import { RouteObject } from 'react-router-dom';
const Home = React.lazy(() => import('./views/Home'));
const LostFound = React.lazy(() => import('./views/LostFound'));
const Administrator = React.lazy(() => import('./views/Administrator'));
const Assemblies = React.lazy(() => import('./views/Assemblies'));
const FirefighterBrigade = React.lazy(
  () => import('./views/FirefighterBrigade')
);
const Ride = React.lazy(() => import('./views/Ride'));
const NeededRide = React.lazy(() => import('./views/Ride/needed'));
const OfferRide = React.lazy(() => import('./views/Ride/offer'));
const SmallAds = React.lazy(() => import('./views/SmallAds'));
const Collaborators = React.lazy(() => import('./views/Collaborators'));
const Mail = React.lazy(() => import('./views/Mail'));
const Documents = React.lazy(() => import('./views/Documents'));
const Surveys = React.lazy(() => import('./views/Surveys'));
const Events = React.lazy(() => import('./views/Events'));
const AccessList = React.lazy(() => import('./features/AccessList'));
const Messages = React.lazy(() => import('./views/Messages'));
const Providences = React.lazy(() => import('./views/Providences'));
const Occurrences = React.lazy(() => import('./views/Occurrences'));
const Board = React.lazy(() => import('./views/Board'));
const Reservations = React.lazy(() => import('./views/Reservations'));
const Providers = React.lazy(() => import('./views/Providers'));
const Polls = React.lazy(() => import('./views/Polls'));
const Login = React.lazy(() => import('./views/Login'));
const Pets = React.lazy(() => import('./views/Pets'));
const Vehicles = React.lazy(() => import('./views/Vehicles'));
const Employees = React.lazy(() => import('./views/Employees'));
const Profile = React.lazy(() => import('./views/Profile'));
const Unit = React.lazy(() => import('./views/Unit'));

const routes: RouteObject[] = [
  { path: '', element: <Home /> },
  { path: 'lostfound', element: <LostFound /> },
  {
    path: 'administrator',
    element: <Administrator />,
  },
  { path: 'assemblies', element: <Assemblies /> },
  {
    path: 'brigade',
    element: <FirefighterBrigade />,
  },
  // {  path: "sugestions", element: <Sugestions /> },
  { path: 'ride/needed', element: <NeededRide /> },
  { path: 'ride/offer', element: <OfferRide /> },
  { path: 'ride', element: <Ride /> },
  { path: 'smallads', element: <SmallAds /> },
  {
    path: 'collaborators',
    element: <Collaborators />,
  },
  { path: 'mail', element: <Mail /> },
  { path: 'documents', element: <Documents /> },
  { path: 'surveys', element: <Surveys /> },
  { path: 'events', element: <Events /> },
  { path: 'accesslist', element: <AccessList /> },
  { path: 'messages', element: <Messages /> },
  {
    path: 'providences',
    element: <Providences />,
  },
  {
    path: 'occurrences',
    element: <Occurrences />,
  },
  { path: 'board', element: <Board /> },
  {
    path: 'reservations',
    element: <Reservations />,
  },
  { path: 'providers', element: <Providers /> },
  { path: 'polls', element: <Polls /> },
  { path: 'login', element: <Login /> },
  { path: 'pets', element: <Pets /> },
  { path: 'vehicles', element: <Vehicles /> },
  { path: 'employees', element: <Employees /> },
  { path: 'profile', element: <Profile /> },
  { path: 'unit', element: <Unit /> },
];

export default routes;
