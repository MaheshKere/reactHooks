import { useState } from "react"

export const useCustomHook=(initialstate)=>{
    const [values,setValues]=useState(initialstate)

    return [values, e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        }
        )
    }]

}