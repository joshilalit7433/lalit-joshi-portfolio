import { createContext,useContext,useState,useEffect } from "react";

const ThemeContext=createContext({
    theme:"light",
    toggleTheme:()=>{}
})

export const ThemeProvider = ({children}) =>{
    const[theme,setTheme]=useState("light");

    useEffect(()=>{
         const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
    },[])


    const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

export const useTheme = () => useContext(ThemeContext);