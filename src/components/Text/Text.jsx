import PropTypes from "prop-types";
import { forwardRef } from "react";

import clsx from "clsx";

import s from "./Text.module.scss";

const variantsMapping = {
  title: "h1",
  subtitle: "h2",

  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",

  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p",
  body5: "p",

  caption1: "p",
  caption2: "p",
  caption3: "p",
};

const Text = forwardRef(({ variant, children, className, ...rest }, ref) => {
  const Component = variant ? variantsMapping[variant] : "span";

  const componentClass = variant && s[variant];

  return (
    <Component
      className={clsx(s.text, componentClass, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.displayName = "Text";

export default Text;
