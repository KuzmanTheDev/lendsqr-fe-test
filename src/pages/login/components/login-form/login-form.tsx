import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login-form.module.scss";
import { PrimaryButton } from "components/common/primary-button/primary-button";
import { useState } from "react";

interface FormInputProps {
  email: string;
  password: string;
}
interface MyRegisterOptions {
  email: RegisterOptions;
  password: RegisterOptions;
}
const registerOptions: MyRegisterOptions = {
  email: {
    required: "Email is required",
  },
  password: {
    required: "Password is required",
  },
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>();

  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    navigate("users");
  };
  return (
    <section className={styles.wrapper}>
      <section>
        <h1 className={styles.h1}>Welcome!</h1>
        <div className={styles.description}>
          <span>Enter details to login.</span>
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field__wrapper}>
          <div className={styles.field}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", registerOptions.email)}
              required
            />
          </div>

          <small className={styles.error}>
            {errors?.email && errors.email.message}
          </small>
        </div>

        <div className={styles.field__wrapper}>
          <div className={styles.field}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", registerOptions.password)}
              required
            />

            <button
              className={styles.show__button}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          <small className={styles.error}>
            {errors?.password && errors.password.message}
          </small>
        </div>

        <Link to="/" className={styles.forgot__password_wrapper}>
          <span className={styles.forgot__password}>FORGOT PASSWORD?</span>
        </Link>

        <PrimaryButton height="48px" type="submit" spacing="0.1em">
          LOG IN
        </PrimaryButton>
      </form>
    </section>
  );
};
