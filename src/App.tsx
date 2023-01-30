import React from "react";
import { Provider } from "react-redux";
import store from "@redux/store";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.heading}>
        <h1>React boilerplate</h1>
      </div>
    </Provider>
  );
}

export default App;
