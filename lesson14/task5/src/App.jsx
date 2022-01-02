import React, { Component, useState } from "react";
import Clock from "./Clock.jsx";

const App =()=> {
  const[visible, setVisible]=useState(true);

    return (
      <div>
        <button className="clock" onClick={()=>setVisible(!visible)}>
          Toggle
        </button>
        <div>
          {visible && <>
  <Clock location ="London" offset = {0}/>
  <Clock location ="Kiev"  offset = {2} />
  <Clock location ="New York"  offset = {-5} />
  </>}
        </div>
      </div>
    );
  }


export default App;
