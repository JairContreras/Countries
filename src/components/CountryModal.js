import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'


const CountryModal = ({ modal, name, setModal }) => {
    const [extractHTML, setExtractHTML] = useState(null);
    useEffect(() => {
        const fetchData = () => {
            const param = name;
            fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${param}`)
                .then(response => response.json())
                .then(data => {
                    setExtractHTML(data.extract_html)
                })
        }
        fetchData();
    }, [name])
    if (!modal) return null;
    return ReactDom.createPortal(
        <div className='modal'>
            <h2>{name}</h2>
            <div
                className='information'
                dangerouslySetInnerHTML={{__html:extractHTML}}
            >

            </div>
            <button className='btn' onClick={() => setModal(!modal)}>Close</button>
        </div>
        , document.getElementById("portal")
    )

}

export default CountryModal