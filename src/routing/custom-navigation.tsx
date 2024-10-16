import React, { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as storageServices from "@/utils";

const CustomNavigation = () => {
  const location = useLocation();
  const prevPath = useMemo(() => {
    return `${location.pathname}${location.search}`;
  }, [location]);

  storageServices.saveStorage("redirectTo", prevPath);
  return <Navigate to={{ pathname: "/" }} state={{ from: location }} />;
};

export default CustomNavigation;
