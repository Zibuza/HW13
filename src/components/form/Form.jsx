import React from "react";
import styles from "./form.module.css";
import Price from "../price/Price";

export default function Form() {
  return (
    <div>
      <Price />
      <form className={styles.form}>
      <input type="text" className={styles.inputWithIcon} placeholder="First name" />
        <p className={styles.error}>First Name cannot be empty</p>
        <input type="text" placeholder="Last name" />
        <p className={styles.error}>Last Name cannot be empty</p>
        <input type="email" placeholder="Email Address" />
        <p className={styles.error}>Looks like this is not an email</p>
        <input type="passwors" placeholder="Password" />
        <p className={styles.error}>Password cannot be empty</p>
        <button>CLAIM YOUR FREE TRIAL</button>
        <p className={styles.support}>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
