import React, { useContext } from "react";
import { Context } from "../Context";
import jsonIcon from "../assets/json-icon.svg";

export const Header = React.memo(() => {
  const { globalState } = useContext(Context);
  const componentName = "Header";

  console.log(`${globalState.welcomeMsg} ${componentName}`);

  return (
    <header className="header">
      <img className="header__icon" src={jsonIcon} alt="json-icon" />
      <h1 className="header__title">JSON app</h1>
    </header>
  );
});
