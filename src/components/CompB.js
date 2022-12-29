import React,{Fragment} from "react";
import { useRef } from "react";
import appStore from "../store/appStore";

const CompB = ()=>{
    const locRef =useRef();
    
    const locInputHandlar =()=>{
     const enteredLocInput = locRef.current.value;
     console.log(enteredLocInput);

     appStore.dispatch({
       type: "LOC-CHANGE",
       payload: enteredLocInput,
     });
    }

    return (
      <Fragment>
        <div>
          <h1>Component A</h1>
          Location : <input ref={locRef} />
        </div>
        <div>
          <button onClick={locInputHandlar}>Click me</button>
        </div>
      </Fragment>
    );
}

export default CompB;