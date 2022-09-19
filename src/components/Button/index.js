import PropTypes from "prop-types";

import S from "./Button.module.css";

const Button = ({ Tag: tag, children, ...attributes }) => {
  const Tag = tag ? tag : "button";
  return (
    <Tag className={S.btn} {...attributes}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  Tag: PropTypes.any,
  children: PropTypes.node,
};

export default Button;
