import React, { useState, useEffect } from 'react'
import CountryModal from './CountryModal';
import LanguageModal from './LanguageModal';
const orderFunction = (a, b) => {
    if (a.name.official < b.name.official) {
        return -1;
    }
    if (a.name.official > b.name.official) {
        return 1;
    }
    return 0;
}

const TableCountries = () => {
    const [countries, setCountries] = useState(null);
    const [modal, setModal] = useState(false);
    const [country, setCountry] = useState(null);
    const [modalLanguage, setModalLanguage] = useState(false);
    const [language, setLenguage] = useState({});
    useEffect(() => {
        const fetchData = () => {
            fetch("https://restcountries.com/v3.1/all")
                .then(response => response.json())
                .then(data => { console.log(data); data.sort(orderFunction); setCountries(data) })
                .finally(()=>{
                    /*
                    let script = document.createElement('script');
                    script.src = '/js/script.js'
                    script.async = false;
                    document.body.appendChild(script);
                    */
                })
        }
        fetchData();
    }, [setCountries])

    return (
        !countries ? <div>loading</div>
            :
            <>
                <CountryModal modal={modal} setModal={setModal} name={country} />
                <LanguageModal modal={modalLanguage} setModal={setModalLanguage} languages={language} />
                <div className='container'>
    
                    <table className='myTable table hover' id='myTable'>

                        <thead>
                            <tr>
                                <th>Flag</th>
                                <th>Official Name</th>
                                <th>Capital</th>
                                <th>Language</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countries.map(country =>
                                    <tr 
                                    key={country.name.common}
                                    onClick={()=>console.log('hi')}
                                    >
                                        <th onClick={() => { setModal(true); setCountry(country.name.common) }} ><img src={country.flags.png} alt='alt flag ' style={{ width: '50px' }} /></th>
                                        <th onClick={() => { setModal(true); setCountry(country.name.common) }}> {country.name.official}</th>
                                        <th onClick={() => { setModal(true); setCountry(country.name.common) }} >{country.capital}</th>
                                        <th><span onClick={()=>{ setModal(false); setLenguage(country.languages); setModalLanguage(true)}}>View all languages</span></th>
                                        <th onClick={() => { setModal(true); setCountry(country.name.common) }} >{country.population} Pop.</th>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            

            </>
    )
}

export default TableCountries
