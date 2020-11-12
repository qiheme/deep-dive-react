import {createContext} from "react";

import Header from "./Header";
import Footer from "./Footer";
import BigHeadline from "./BigHeadline";
import SmallHeadline from "./SmallHeadline";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
