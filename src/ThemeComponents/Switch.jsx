import React, { useState } from "react";
import "./Switch.css";

function Switch(props) {
  const [isToggled, setIsToggled] = useState(false);
  let localToggle = JSON.parse(localStorage.getItem("Toggle"))

  function noToggled(){
    setIsToggled(false)
    localStorage.setItem("Toggle", JSON.stringify(false))
  }

  function yesToggled(){
    setIsToggled(true)
    localStorage.setItem("Toggle", JSON.stringify(true))
  }

  const onToggle = () => {
    JSON.parse(localStorage.getItem("Toggle"))
    isToggled === false ? yesToggled() : noToggled()
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={localToggle} onChange={onToggle} onClick={props.onClick}/>
      <span className="switch" />
    </label>
  );
}
export default Switch;
