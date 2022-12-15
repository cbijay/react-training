import { PropType } from "prop-types";
import React from "react";

const HelloWorld = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

const PropTypes = {
  title: PropType.string,
};

HelloWorld.proptype = PropTypes;

export default HelloWorld;
