import React, { useState, useRef } from "react";
import { useActiveElement } from "../../Hooks";
import Style from "./DarkModeSwitch.module.css";

const DarkModeSwitch = () => {
  const rootElement = document.querySelector(":root");

  const pushTheme = (theme) => {
    rootElement.setAttribute("data-theme", theme);
  };

  const focusedElement = useActiveElement();

  const clickIfFocused = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      focusedElement.click();
    }
    return focusedElement;
  };

  const [checked, setChecked] = useState(false);

  const handleSwitchClick = (e) => {
    checked === false ? pushTheme("dark") : pushTheme("true");
    setChecked(!checked);
  };

  return (
    <div
      role="switch"
      aria-labelledby="switchDesc"
      className={`${Style.darkModeSwitch} ${checked ? Style.on : ""}`}
      aria-checked={checked}
      tabIndex="0"
      onClick={(e) => {
        handleSwitchClick(e);
      }}
      onKeyDown={clickIfFocused}
    >
      <input
        type="checkbox"
        aria-hidden="true"
        defaultChecked={checked}
        className={Style.switch}
      />
      <label
        htmlFor="theme"
        className={Style.switchLabel}
        role="img"
        id="switchDesc"
      >
        Dark mode is {checked ? "enabled" : "disabled"}
      </label>
    </div>
  );
};

export default DarkModeSwitch;
