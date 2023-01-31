import React from "react";
import CardAb from "./cardAboniment/CardAb";
import ContentOne from "./ContentOne/ContentOne";
import styles from "./Main.module.scss";

const Main = () => {
  return (
      <div className={styles.Main_Container}>
        <ContentOne />
        <CardAb />
      </div>
  );
};

export default Main;
