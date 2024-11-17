import { lazy } from 'react';
import { DETAIL_PAGE, HOME_PAGE } from './constants';

interface RouteTypes {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  allow: boolean;
}

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const DetailPage = lazy(() => import('@/pages/detail/DetailPage'));

const coreRoutes: RouteTypes[] = [
  {
    path: HOME_PAGE.PATH,
    title: HOME_PAGE.TITLE,
    component: HomePage,
    // Default true, make it false if you want the route to be protected
    allow: true,
  },
  {
    path: DETAIL_PAGE.PATH,
    title: DETAIL_PAGE.TITLE,
    component: DetailPage,
    allow: true,
  },
];

export default coreRoutes;
