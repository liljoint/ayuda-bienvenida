import React, { useState } from "react";
import sideMenuContext from "./sideMenuContext";
import { node } from "prop-types";
const ProvideSideMenu = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <sideMenuContext.Provider value={[isOpen, setOpen]}>
      {children}
    </sideMenuContext.Provider>
  );
};
ProvideSideMenu.propTypes = {
  children: node,
};

ProvideSideMenu.defaultProps = {
  children: undefined,
};

export default ProvideSideMenu;
