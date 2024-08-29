import CountriesApp from "./CountriesApp";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function EachCountry() {
    const [valueFromChild, setValueFromChild] = useState('');
    const location = useLocation()
    const countryInfo = location.state

    const handleValueChange = (theme) => {
        setValueFromChild(theme);
    };

    return (
        <>
            <div id={valueFromChild}>
                <CountriesApp onValueChange={handleValueChange}/>
            
                <aside>
                    <div className="container">
                        <button><Link to="/" className="backButton"><ArrowBackIcon className="arrowIcon"/><p>Back</p></Link></button>
                        <div className="moreDetails">
                            <img src={countryInfo.flag} className="moreDetailsImage"/>
                            <div className="moreDetailsInfo">
                                <h3 className="countryName">{countryInfo.name}</h3>
                                <div className="columns">
                                    <div className="infoLeft">
                                        <p><b>Native Name: </b><span className="lowOpacity">{countryInfo.nativeName}</span></p>
                                        <p><b>Population: </b><span className="lowOpacity">{countryInfo.population.toLocaleString('en-US')}</span></p>
                                        <p><b>Region: </b><span className="lowOpacity">{countryInfo.region}</span></p>
                                        <p><b>Sub Region: </b><span className="lowOpacity">{countryInfo.subregion}</span></p>
                                        <p><b>Capital: </b><span className="lowOpacity">{countryInfo.capital}</span></p>
                                    </div>
                                    <div className="infoRight">
                                        <p><b>Top Level Domain: </b><span className="lowOpacity">{countryInfo.topLevelDomain}</span></p>
                                        <p><b>Currencies: </b><span className="lowOpacity">{countryInfo.currencies[0].name}</span></p>
                                        <p><b>Languages: </b><span className="lowOpacity">{countryInfo.languages.map((d) => (<span className="eachLanguage">{d.name}, </span>))}</span></p>
                                    </div>
                                </div>
                                <div className="borders">
                                    <h6>Border Countries:</h6>
                                    <p>{countryInfo.borders == null ? <p className="lowOpacity">None</p> : countryInfo.borders.map((d) => (<span className="eachBorder">{d}, </span>))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <Footer theme={valueFromChild}/>
            </div>
        </>
    )
}

export default EachCountry