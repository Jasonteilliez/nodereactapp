import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="nav">
      <Link to="/" className="">
        Accueil
      </Link>
      <Link to="/messages" className="">
        Messages
      </Link>
    </div>
  );
}
export default Nav;
