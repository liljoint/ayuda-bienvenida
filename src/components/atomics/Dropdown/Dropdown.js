import React from "react";
import { Dropdown as DD } from "semantic-ui-react";
const Dropdown = ({ ...props }) => {
  return <DD search selection fluid {...props} />;
};
export default Dropdown;
