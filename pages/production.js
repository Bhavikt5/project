import React from "react";
import styles from "../styles/Production.module.css";

const production = () => {
  return (
    <div>
      <section className={styles.section1}>
        <div className={styles.chart1}></div>
        <div className={styles.chart2}></div>
      </section>
      <section className={styles.section2}>
        <div className={styles.section2_inner1}></div>
        <div className={styles.section2_inner2}>
          <div className={styles.innerBox}>
            <div className={styles.internalBox1}></div>
            <div className={styles.internalBox2}></div>
          </div>
          <div className={styles.innerBox}>
            <div className={styles.internalBox1}></div>
            <div className={styles.internalBox2}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default production;
