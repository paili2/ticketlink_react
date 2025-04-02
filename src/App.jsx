import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "./header/Header";
import Body from "./body/Body";
import "./styles/reset.css";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
