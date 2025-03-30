import React from 'react';
import { RouteObject } from 'react-router-dom';
const Home = React.lazy(() => import('./views/Home'));
const LostFound = React.lazy(() => import('./features/lost-found'));
const Administrator = React.lazy(() => import('./features/administrator'));
const Assemblies = React.lazy(() => import('./features/assemblies'));
const FirefighterBrigade = React.lazy(
  () => import('./features/firefighter-brigade')
);
const Ride = React.lazy(() => import('./features/ride'));
const NeededRide = React.lazy(() => import('./features/ride/needed'));
const OfferRide = React.lazy(() => import('./features/ride/offer'));
const SmallAds = React.lazy(() => import('./views/SmallAds'));
const Collaborators = React.lazy(() => import('./features/collaborators'));
const Mail = React.lazy(() => import('./features/mail'));
const Documents = React.lazy(() => import('./features/documents'));
const Surveys = React.lazy(() => import('./views/Surveys'));
const Events = React.lazy(() => import('./features/events'));
const AccessList = React.lazy(() => import('./features/access-list'));
const Messages = React.lazy(() => import('./features/messages'));
const Providences = React.lazy(() => import('./features/providences'));
const Occurrences = React.lazy(() => import('./features/occurrences'));
const Board = React.lazy(() => import('./features/board'));
const Reservations = React.lazy(() => import('./features/reservations'));
const Providers = React.lazy(() => import('./features/providers'));
const Polls = React.lazy(() => import('./features/polls'));
const Login = React.lazy(() => import('./views/Login'));
const Pets = React.lazy(() => import('./features/pets'));
const Vehicles = React.lazy(() => import('./views/Vehicles'));
const Employees = React.lazy(() => import('./features/employees'));
const Profile = React.lazy(() => import('./features/profile'));
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
