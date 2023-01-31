import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SimpleLayout from "@components/layouts/SimpleLayout";
import store from "@redux/store";
import AppRoutes from "@routes";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SimpleLayout>
          <AppRoutes />
        </SimpleLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
