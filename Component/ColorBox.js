import React from "react";
import Proptypes from "prop-types";

function ColorBox(props) {
  const { color, title } = props;

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <h1>{title}</h1>
    </div>
  );
}

ColorBox.propTypes = {
  color: Proptypes.string.isRequired,
};

export default ColorBox;
