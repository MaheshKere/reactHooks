import { useEffect, useRef, useState } from "react"
import { useCustomHook } from "../useStateFolder/useCustomHook"
import { Hello } from "./Hello"
import {  useCustomUseEffect } from "./useCustomUseEffect"

export const UseEffect =()=>{

    const [count ,setCount]=useState( () => JSON.parse(localStorage.getItem("count")))
    useEffect(()=>{
        console.log('render') 
        localStorage.setItem("count",JSON.stringify(count))
        return ()=> console.log('Un-Mount') 
     
    },[]) 
    const [showHello, setHelloState]=useState(true)
    const [count2 ,increMentCount]=useState({count2:10})
    const state=useCustomUseEffect('http://numbersapi.com/'+count+'/trivia')
    const inputRef=useRef()
    return<>
             <div ><b>Use Effect Hook {state?.loading? state?.data : 'Loading.....'} </b></div>
            <div> <button onClick={() => setHelloState( showHello => showHello=!showHello)}>
                ShowHello</button></div>
            {showHello ? <Hello /> :null} 
            <button  onClick={() => setCount(count =>count+1)}>Re-Render</button>
            {localStorage.getItem("count")}
            <div><input value={count} ref={inputRef} onChange={e => 0 }/></div>

            <button onClick={() =>{ console.log(inputRef.current) 
                inputRef.current.focus()
            }}>Focus</button>
        </>
}
  
export default UseEffect