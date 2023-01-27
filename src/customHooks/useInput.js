import { useState } from "react";

const useInput = (initialVal)=>{
    const [value, setvalue] = useState(initialVal);
    const reset = ()=>{
        setvalue(initialVal)
    }
    const bind = {
        value,
        onchange:e=>{
            setvalue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput