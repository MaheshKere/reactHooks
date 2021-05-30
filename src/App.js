import logo from './logo.svg';
import './App.css';
import UseStateFile from './useStateFolder/useStateFile';
import UseEffect from './useEffect/useEffectFile';
import { useState } from 'react';

function App() {
  
  const [{toggleButton} ,showHideUseEffect]=useState({toggleButton:true})
  return <>
  <UseStateFile/>
============================================================================
  <button onClick={()=>{showHideUseEffect( data=> ({toggleButton:!data.toggleButton}) ) }}>Toggle</button>
  {toggleButton ?<UseEffect/>:null }
  </>

}

export default App;
