import React from "react";
import { useSelector } from "react-redux";
import appReducer from "../store/appReducer";

const CompC = () =>{
    const storeData = useSelector((state)=>{
        return state.appReducer.name
    })
    return (
      <div>
        <h1> Component C :  {storeData} </h1>
      </div>
    );
}

export default CompC;