import React, { Children, StrictMode } from "react";
import { Header, Img } from "./header/header";
import Addform from "./addform/addform";

export default function App() {
  return (
    <>
      <Header className="header">
        <Img src="img/logo.svg" alt="Logo" className="header__logo" />
      </Header>
      <Addform />
    </>
  );
}
