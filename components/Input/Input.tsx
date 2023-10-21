import React, { useCallback } from "react";
import styles from "./styles.module.css";

export const Input: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  placeHolder?: string;
  style?: React.CSSProperties;
  invalid?: boolean;
}> = ({ text, setText, disabled, placeHolder, style, invalid }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [setText]
  );

  return (
    <input
      className={[styles.input, invalid ? styles.invalid : undefined].join(" ")}
      disabled={disabled}
      name="title"
      value={text}
      onChange={onChange}
      placeholder={placeHolder}
      style={style}
    />
  );
};
