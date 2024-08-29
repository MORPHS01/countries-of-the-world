import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import CountriesApp from"./CountriesApp"


function Structure() {
    const [valueFromChild, setValueFromChild] = useState('');

    const handleValueChange = (theme) => {
        setValueFromChild(theme);
    };



    return(
        <>
            <CountriesApp onValueChange={handleValueChange}/>
            <Body theme={valueFromChild}/>
            <Footer theme={valueFromChild}/>
            
        </>
    )
}

export default Structure