import React from "react";
import { Oval } from "react-loader-spinner";
import "./Loader.css";

function Loader() {
  return (
    <div className="Loader">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
