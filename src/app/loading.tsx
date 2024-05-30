import React from "react";
import Loader from "@/components/shared/loader/Loader";
import styles from "./page.module.scss";

const Loading = () => {
  return (
    <div>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
