import { useState } from "react"
import { useCustomHook } from "./useCustomHook"


export  const UseStateFile= () =>{
    const [{count,count1} , setState]=useState({count :10,count1:20})
    const [email,setEmail]=useState("Mahesh")
    const [password,setPassword]=useState("")

    const [values,handleChange]=useCustomHook({email:'Maheshkere' ,password:''})
    return (
    <div>
        <button onClick={() => setState(currentState => ({...currentState ,count :currentState.count+1}))}>Click</button>
        <div> Count : {count} </div>
        <div> Count1 : {count1} </div>
        <div> <input type="text" value={email} onChange={(e) => setEmail(  e.target.value)}></input></div>
        <div> <input type="password" value={password} onChange={(e) => setPassword( () => e.target.value)}></input></div>

        <div> <b>Using Custom Hook</b></div>

        <div> <input type="text" name="email" value={values.email} onChange={handleChange}></input></div>
        <div> <input type="password" name="password" value={values.password} onChange={handleChange}></input></div>
    </div>
    )
}

export default UseStateFile;