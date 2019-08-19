import React from "react";

import css from "./styles.scss";
function BaseButton({ className, onClick, children }) {
  return (
    <div className={className} onClick={onClick}>
      <div>{children}</div>
    </div>
  );
}
export function Link(props) {
  const { className = "", onClick, children } = props;
  const cls = [css["link"], className].join(" ");
  return (
    <BaseButton className={cls} onClick={onClick}>
      {children}
    </BaseButton>
  );
}
export function Button({ onClick, children }) {
  return (
    <BaseButton className={css["btn"]} onClick={onClick}>
      {children}
    </BaseButton>
  );
}
