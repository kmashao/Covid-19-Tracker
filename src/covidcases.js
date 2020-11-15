import {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = "https://disease.sh/v3/covid-19/"

function GlobalCases(){

    const [globalCases, setCases] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
        const result = await axios(
            `${baseURL}all`,
        );
        setCases(result.data)};

        fetchData();
    }, []);

    return(
    <div className="container">
        {console.log(globalCases)}
        <div className="row">
        
            <div className="col-md-4">
                <h2>Total Cases</h2>
                <p>{globalCases.cases}</p>
            </div>
            <div className="col-md-4">
                <h2>Today Cases</h2>
                <p>{globalCases.todayCases}</p>
            </div>
            <div className="col-md-4">
                <h2>Total Deaths</h2>
                <p>{globalCases.deaths}</p>
            </div>
            <div className="col-md-4">
                <h2>Recovered</h2>
                <p>{globalCases.recovered}</p>
            </div>
            <div className="col-md-4">
                <h2>Active cases</h2>
                <p>{globalCases.active}</p>
            </div>
            <div className="col-md-4">
                <h2>Total tests</h2>
                <p>{globalCases.tests}</p>
            </div>

        </div>
    </div>)
    
}

export default GlobalCases;