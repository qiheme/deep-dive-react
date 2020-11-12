import {createContext, useContext} from "react";

import Header from "./Header";
import Footer from "./Footer";
import BigHeadline from "./BigHeadline";
import SmallHeadline from "./SmallHeadline";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const themes = {
  light: "light",
  dark: "dark",
  blue: "primary",
  gray: "secondary",
  red: "danger",
  yellow: "warning",
  teal: "info",
  white: "white",
};

export const ThemeContext = createContext(themes);

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <Header />
      <BigHeadline />
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <SmallHeadline />
        <SmallHeadline />
      </div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <SmallHeadline />
        <SmallHeadline />
      </div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <SmallHeadline />
        <SmallHeadline />
      </div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <SmallHeadline />
        <SmallHeadline />
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
