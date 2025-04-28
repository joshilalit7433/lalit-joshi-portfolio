
import { useState } from 'react'
import React from 'react';

const ThemeContext = React.createContext();

const Theme = ({ children }) => {

    
    const[style,setstyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [mode,setmode]=useState(true)

   

    const change=()=>{
        setmode(!mode)
    if(style.color==="black")
        {
            setstyle({
                color:"white",
                backgroundColor:"black"
            })
        
        }
        else{
            setstyle({
                color:"black",
                backgroundColor:"white"
            })
        }
    }

    return(
        <ThemeContext.Provider value={[{ style, change,mode}]}>
      {children}
    </ThemeContext.Provider>
    )
  

}

export { Theme, ThemeContext };
