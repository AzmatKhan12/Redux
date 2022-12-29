import React from "react";
import { useSelector } from "react-redux";

const CompD = () =>{

  const data = useSelector((state)=>{
     return state.appReducer.loc
  })
    return (
      <div>
        <h1>Component D : {data}</h1>
      </div>
    );
}

export default CompD;