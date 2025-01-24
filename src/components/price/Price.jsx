import React from "react";
import styles from "./price.module.css";

export default function Price() {
  return (
    <div className={styles.price}>
      <p>
        <span>Try it free 7 days </span>then $20/mo. thereafter
      </p>
    </div>
  );
}
