import LoginForm from "pages/Login/components/LoginForm/LoginForm";

import Logo from "components/Logo/Logo";

import s from "./Login.module.scss";

const Login = () => {
	return (
		<div className={s.loginPageContainer}>
			<Logo />
			<div className={s.loginFormWrap}>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
