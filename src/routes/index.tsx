import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { COUNTER_ROUTE, HOME_ROUTE } from "@commons/constants/browser-route";

const HomePage = lazy(() => import("../pages/Home"));
const CounterPage = lazy(() => import("../pages/Counter"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={COUNTER_ROUTE} element={<CounterPage />} />
    </Routes>
  );
};
export default AppRoutes;
