import React from 'react'
import ReactDom from 'react-dom'
import { order } from '../order'

const LanModal = ({ modal, languages, setModal }) => {
    console.log(languages)
    const languagesOrdered = languages?Object.values(languages).sort(order) : null;
    if (!modal) return null;
    return ReactDom.createPortal(
        <div className='modal'>
            <h2>Languages</h2>
            <ul className='information'>
                {
                    languages?
                   languagesOrdered.map(
                       item => <li>{item}</li>
                   )
                   : null
                }
            </ul>


            <button className='btn' onClick={() => setModal(!modal)}>Close</button>
        </div>
        , document.getElementById("portal")
    )

}

export default LanModal