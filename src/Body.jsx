import { useState, useRef } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";




function Body(props) {
    const theme = props.theme
    const [searchArray, setSearchArray] = useState(data)
    let selectedCategory = useRef()

    function searchTextChange(e){
        const searchText = e.target.value
        const newFilter = data.filter((d) => {
            return d.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setSearchArray(newFilter)
    }

    function handleSelectChange(e){
        selectedCategory = e.target.value
        const regionFilter = data.filter((d) => {
            return d.region.includes(selectedCategory)
        })
        setSearchArray(regionFilter)
    }


    

    return( 
        <div id={theme}>
            <body>
                <div className="container">
                    <section className="filters">
                        <input type="search" className="search" placeholder="Search for a country..." onChange={searchTextChange}/> 
                        <select name="continents" className="filter" onChange={handleSelectChange} value={selectedCategory}>
                            <option value="" selected hidden>Filter by Region</option>
                            <option  value="Africa">Africa</option>
                            <option  value="Americas">America</option>
                            <option  value="Asia">Asia</option>
                            <option  value="Europe">Europe</option>
                            <option  value="Oceania">Oceania</option>
                        </select>
                    </section>
                </div>
            
                <div className="container">
                    <article>
                        {searchArray.length > 0 ? 
                            searchArray.map((d) => (
                                <Link to={`/country/${d.name}`} state={d} className="countryCard">
                                    <img src={d.flags.png} alt={d.name} className="flag"/>
                                    <div className="basicDetails">
                                        <h2 className="cardHeader">{d.name}</h2>
                                        <p><b>Population: </b>{d.population.toLocaleString('en-US')}</p>
                                        <p><b>Region: </b>{d.region}</p>
                                        <p><b>Capital: </b>{d.capital}</p>
                                    </div>
                                </Link>
                        )): <p>No results found for your search...</p>}
                    </article>
                </div>
            </body>

            
        </div> 
    );
}

export default Body;








