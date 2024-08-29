import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Switch from "./ThemeComponents/Switch"
import MoonIcon from "./ThemeComponents/icons/MoonIcon";
import SunIcon from "./ThemeComponents/icons/SunIcon";


function CountriesApp({ onValueChange }){
    const [theme, setTheme] = useState("light")
    let mtheme = localStorage.getItem("Theme", theme)


    function enableLight(){
        setTheme("light")
        localStorage.setItem("Theme", "light")
    }
    function enableDark(){
        setTheme("dark")
        localStorage.setItem("Theme", "dark")
    }


    function toggleSwitch() {
        localStorage.getItem("Theme", theme)
        theme === "light" ? enableDark() : enableLight()
    }

    const handleInputChange = () => {
        onValueChange(mtheme);
    };

    useEffect(handleInputChange, [theme])
    
    return(
        <>
            <div id={mtheme}>
                <header>
                    <div className="container">
                        <section>
                            <Link to="/"><h1>Where in the world?</h1></Link>
                            <div className="switch">
                                <SunIcon/>
                                <Switch onClick ={toggleSwitch} />
                                <MoonIcon/>
                            </div>
                        </section>
                    </div>
                </header>
            </div>
        </>
    );
}

export default CountriesApp;