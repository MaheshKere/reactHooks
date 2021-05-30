import { useEffect, useState } from "react"

export const useCustomUseEffect = (url) =>{
    const [state,setstate]=useState({data:null ,loading:false})

    useEffect( () =>{
        setstate( {data:null,loader:false})
        fetch(url).then( x => x.text()).then(
            y => {
                setstate( {data:y ,loading:true})
            }
        ) 
    },[url])

    return state
}