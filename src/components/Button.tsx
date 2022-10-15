import React from "react";
import { styles } from "../style";

interface btnProps {
  tag?: React.ElementType;
  children: React.ReactNode;
  [attributes: string]: any;
}

const Button = ({ tag, children, ...attributes }: btnProps) => {
  const Tag = tag ? tag : "button";
  return (
    <Tag
      className={`${styles.elementBg} ${styles.elementTextColor} ${styles.boxShadow} shadow-lg px-4 py-[0.35rem] text-sm cursor-pointer inline-block text-center rounded-md hover:scale-110`}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

export default Button;
