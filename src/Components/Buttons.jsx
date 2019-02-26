import React from "react";

import "../styles/buttons.scss";
function BaseButton({ className, onClick, children }) {
  return (
    <div className={className} onClick={onClick}>
      <div>{children}</div>
    </div>
  );
}
export function Link(props) {
  const {className="", ...rest}=props;
  const cls=['link',className];
  return <BaseButton className={cls.join(' ')} {...rest} />;
}
export function Button(props) {
  return <BaseButton className={"btn"} {...props} />;
}
