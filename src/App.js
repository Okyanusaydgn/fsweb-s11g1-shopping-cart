import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { Button } from "./components/Button";


function App() {
  
  return (
    <div className="App">
      <Navigation/>

      <Button
        onClick={() => alert("tıklandım")}
        title="bana tıkla"
        className="highlight"
      >
        <strong>Vurgulu</strong>
        <img
          style={{ width: "120px", height: "120px" }}
          src="https://t4.ftcdn.net/jpg/05/62/71/71/360_F_562717129_PSYwSrXggdfbjEos7XvgWjwUCdfzdsiI.jpg"
        ></img>
        {/* Buraya yazdığım her şey button componentine children olarak gönderilir */}
        Buton metni buraya
      </Button>

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
  );
}

export default App;
