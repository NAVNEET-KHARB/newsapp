import React from "react";
import loading from "./Flip Flop.gif";
export default function Spinner() {
  return (
    <div className="spinner">
      <center>
        <img className="gif" src={loading} alt="LOADING..." />
      </center>
    </div>
  );
}
