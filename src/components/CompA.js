import React,{Fragment} from "react";
import { useRef } from "react";
import appStore from "../store/appStore";

const CompA = ()=>{
   const nameRef= useRef();
  
   const nameInputHandlar =()=>{
      const enteredNameInput = nameRef.current.value;
      console.log(enteredNameInput);

      appStore.dispatch({
        type: "NAME-CHANGE",
        payload: enteredNameInput,
      });

   }
    return (
      <Fragment>
        <div>
          <h1>Component A</h1>
          name : <input ref={nameRef} />
        </div>
        <div>
          <button onClick={nameInputHandlar}>Click here</button>
        </div>
      </Fragment>
    );
}

export default CompA ;