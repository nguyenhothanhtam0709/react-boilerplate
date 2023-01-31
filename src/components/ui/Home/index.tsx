import React, { type FC } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { COUNTER_ROUTE } from "@commons/constants/browser-route";
const Home: FC = () => {
  return (
    <div className={styles.heading}>
      <h1>React boilerplate</h1>
      <Link to={COUNTER_ROUTE}>Go to counter page</Link>
    </div>
  );
};
export default Home;
