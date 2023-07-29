import { Link } from "react-router-dom";

import { Formik } from "formik";

import github from "assets/github-icon.svg";
import google from "assets/google-icon.svg";

import Text from "components/Text/Text";

import s from "./LoginForm.module.scss";

const LoginForm = () => {
	return (
		<div className={s.formContainer}>
			<Text variant="subtitle" className={s.formTitle}>
				Sign in to your account
			</Text>
			<Formik
				initialValues={{ email: "", password: "" }}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "This field is required";
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = "Please enter a valid email address";
					}
					if (!values.password) {
						errors.password = "This field is required";
					} else if (!/^[A-Za-z0-9_][A-Za-z]*[A-Za-z0-9!_$%@.-]*$/.test(values.password)) {
						errors.password = "Invalid email or password ";
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
								Email
							</label>
							<input
								className={errors.email ? `${s.input} ${s.error}` : s.input}
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email adress"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							<Text variant="body4" className={s.errorText}>
								{errors.email && touched.email && errors.email}
							</Text>
						</div>
						<div>
							<div className={s.passwordWrap}>
								<label className={s.label} htmlFor="password">
									Password
								</label>
								<a className={s.forgotPassword} href="#">
									Forgot Password?
								</a>
							</div>
							<input
								className={errors.password ? `${s.input} ${s.error}` : s.input}
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<Text variant="body4" className={s.errorText}>
								{errors.password && touched.password && errors.password}
							</Text>
						</div>
						<button className={s.submitButton} type="submit" disabled={isSubmitting}>
							Sing In
						</button>
					</form>
				)}
			</Formik>
			<Text variant="body2" className={s.loginWith}>
				Or sign in with
			</Text>
			<div className={s.buttonsWrap}>
				<a className={s.loginWithButton} href="#">
					<img src={google} alt="Google" />
				</a>
				<a className={s.loginWithButton} href="#">
					<img src={github} alt="GitHub" />
				</a>
			</div>
			<div className={s.singUpWrap}>
				<Text variant="body2" className={s.singUp}>
					Don’t have an account?
				</Text>
				<Link className={s.signUpLink} to="">
					Sign Up Now
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
