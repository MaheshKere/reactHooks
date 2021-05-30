import { useEffect, useRef } from "react"

export const Hello = () =>{

    useEffect( () =>{
        console.log('hello component')
    })
    const renders= useRef(0)
    renders.current=renders.current+1
    console.log('hello ',renders.current)
    return <div> Hello </div>
}  