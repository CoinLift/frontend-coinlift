import { forwardRef } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import Text from "components/Text/Text";

import s from "./Button.module.scss";

const Button = forwardRef(({ variant, following, disabled, children, className, ...rest }, ref) => {
	//  variant = 'small' || 'big'
	const componentClass = variant && s[variant];
	const subscription = following && s["following"];
	const unActive = disabled && s["disabled"];
	const text = variant === "small" ? "h6" : "h5";

	return (
		<button className={clsx(s.button, componentClass, subscription, unActive, className)} ref={ref} {...rest}>
			<Text variant={text} className={s.color}>
				{children}
			</Text>
		</button>
	);
});

Button.propTypes = {
	disabled: PropTypes.bool,
	following: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

Button.displayName = "Button";

export default Button;
