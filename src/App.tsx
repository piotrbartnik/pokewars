import React, { ReactElement } from "react";
import CardHolder from "./Containers/CardHolder/CardHolder";
import styles from "./App.module.scss";

const App = (): ReactElement => {
  return (
    <div className={styles.App}>
      <CardHolder />
    </div>
  );
};

export default App;
