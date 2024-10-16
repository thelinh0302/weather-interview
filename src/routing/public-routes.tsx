import { Navigate, RouteObject } from "react-router-dom";
import { locations } from "./location";
import * as util from "@/utils";
import { MinimalLayout } from "@/layout";
import { PUBLICPATH } from "./public-path";
import Home from "@/pages/home";

type MainRoutes = (isAuthenticated: boolean) => RouteObject[];

const PUBLIC_ROUTES: MainRoutes = (isAuthenticated) => {
  console.log(isAuthenticated);
  const redirectTo = util.retrieve("redirectTo");
  const prevPath =
    redirectTo === undefined ? null : JSON.parse(redirectTo as string);
  const getRedirectElement = (path: string) => {
    if (!isAuthenticated) {
      if (!PUBLICPATH.includes(path)) {
        return <Navigate to="/home" replace />;
      }
    } else {
      if (PUBLICPATH.includes(path)) {
        return <Navigate to={prevPath ?? locations.dashboard} replace />;
      }
    }
    return null;
  };
  return [
    {
      path: locations.root,
      element: <MinimalLayout />,
      children: [
        {
          path: "",
          element: getRedirectElement("/") || <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: getRedirectElement("/home") || <Home />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <Navigate to="/login" replace />,
    // },
  ];
};
export default PUBLIC_ROUTES;
