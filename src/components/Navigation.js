import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { CardContext } from "../context/CardContextProvider";

const Navigation = () => {
  
  const { cards } = useContext(CardContext)

  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{ cards.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
