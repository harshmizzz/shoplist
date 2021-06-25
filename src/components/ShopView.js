import React, { useState } from "react";
import data from "./data.json";
import "./shopview.css";


function ShopView() {
  let [searchTerm, setsearchTerm] = useState("");
  
  function status(val){
    var today= new Date();
    if (today.getDate === data.shops.opening) {
      return val=" open"
    }
    else {
      return "close"
    }
  }

  return (
    <div className="container">
      <label>Search by Area or Category: </label>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />

      {data.shops
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.category.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.area.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val) => {
          return (
            <>
              <div className="shops">
                <div>
                  <label>Shopname:</label> {val.shopname}
                </div>
                <div>
                  <label>Area:</label> {val.area}
                </div>
                <div>
                  <label>Category:</label> {val.category}
                </div>
                 <label>Status:{status(val)}</label> 
                   
              </div>
              
            </>
          );
        })}
    </div>
  );
}

export default ShopView;
