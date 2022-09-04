import {useState,useEffect} from "react";



function useDebounce(value,delay) {

    const [valueDebounce,setValueDebounce]=useState(value);
    
    useEffect(() =>{
        const handler = setTimeout(() =>setValueDebounce(value),delay);
        return () => clearTimeout(handler);
        

    },[value])

  return valueDebounce;
}

export default useDebounce;