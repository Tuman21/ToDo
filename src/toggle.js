import React, { useState } from "react";

const ToggleButton = () => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((prev) => !prev);
  };

  return (
    <span className>
      {toggled ? (
        <button className="btn btn-success" onClick={handleClick}>
          ✔️
        </button>
      ) : (
        <button className="btn btn-outline-success" onClick={handleClick}>
          ✔️
        </button>
      )}
    </span>
  );
};

export default ToggleButton;
