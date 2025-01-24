import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name cannot exceed 30 characters")
    .required("Name is required"),

  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name must contain only letters")
    .min(2, "Last Name must be at least 2 characters")
    .max(30, "Last Name cannot exceed 30 characters")
    .required("Last Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
    .required("Password is required"),
});
