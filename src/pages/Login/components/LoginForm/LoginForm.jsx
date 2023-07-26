import { Link } from "react-router-dom";
import { Formik } from "formik";
import google from "../../../../assets/google-icon.svg";
import github from "../../../../assets/github-icon.svg";
import s from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Welcome to the CoinLift !</h1>
      <div className={s.formContainer}>
        <h2 className={s.formTitle}>Log In your account</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (
              !/^[A-Za-z0-9_][A-Za-z]*[A-Za-z0-9!_$%@.-]*$/.test(
                values.password
              )
            ) {
              errors.password = "Invalid password";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={s.form}>
              <div>
                <label className={s.label} htmlFor="email">
                  Email Adress
                </label>
                <input
                  className={s.input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email adress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <label className={s.label} htmlFor="password">
                  Password
                </label>
                <input
                  className={s.input}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className={s.passwordWrap}>
                  {errors.password && touched.password && errors.password}
                  <a className={s.forgotPassword} href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                className={s.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                Log In
              </button>
            </form>
          )}
        </Formik>
        <p className={s.loginWith}>Or Log In with</p>
        <div className={s.buttonsWrap}>
          <a className={s.loginWithButton} href="#">
            <img src={google} alt="Google" />
          </a>
          <a className={s.loginWithButton} href="#">
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div className={s.singUpWrap}>
          <p className={s.singUp}>Don’t have an account?</p>
          <Link className={s.signUpLink} to="">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
