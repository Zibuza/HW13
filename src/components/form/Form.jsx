import React, { useState } from "react";
import styles from "./form.module.css";
import Price from "../price/Price";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../validations/userSchema";

export default function Form() {
  const [showCard, setShowCard] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => {
    setShowCard(true);
    setUserInfo(data);
    setShowPrice(false);
  };
  return (
    <div>
      {showPrice ? <Price /> : ""}
      {showCard ? (
        <div className={styles.userCard}>
          <h2>First name: {userInfo.name}</h2>
          <h2>Last name: {userInfo.lastname}</h2>
          <p>email: {userInfo.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input type="text" placeholder="First name" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input
            type="text"
            placeholder="Last name"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className={styles.error}>{errors.lastname.message}</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p className={styles.support}>
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </form>
      )}
    </div>
  );
}
