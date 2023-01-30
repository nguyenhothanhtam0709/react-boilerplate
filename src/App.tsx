import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@redux/store";
import AppRoutes from "@routes";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
