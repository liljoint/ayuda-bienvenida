import React from "react";
import "./App.css";
import AppRoutes from "./routes";
import ProvideAuth from "./context/auth/ProvideAuth";
import ProvideSideMenu from "./context/sideMenu/ProvideSideMenu";

function App() {
  return (
    <ProvideSideMenu>
      <ProvideAuth>
        <AppRoutes />
      </ProvideAuth>
    </ProvideSideMenu>
  );
}

export default App;
