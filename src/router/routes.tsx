import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/ui/loading";
import { dashboardRoutes } from "./dashboardRoutes";
import { AppRoute } from "./type";
import Table from "../pages/Table";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User"));
const Modals = lazy(() => import("../pages/modales"));


const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: withSuspense(<Home />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/dashboard",
    element: withSuspense(<Dashboard />), 
    roles: ["ADMINISTRADOR"],
    children: dashboardRoutes, 
  },

  {
    path: "/users",
    element: withSuspense(<User />),
    roles: ["ADMINISTRADOR"],
  },
  
  {
    path: "/modals",
    element: withSuspense(<Modals />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/table",
    element: withSuspense(<Table />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },
];