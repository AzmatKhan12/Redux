import React,{Fragment } from 'react';
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import CompD from './components/CompD';

const  App= () => {
  return (
    <Fragment>
      <CompA/>
      <CompB/>
      <CompC/>
      <CompD/>
    </Fragment>
  );
}

export default App;
