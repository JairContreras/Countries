import React from 'react'
import flag from '../images/flag.png'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={flag} alt='flag icon' className='icon'></img>
             
             <h1>Countries from <span className='line'>all around the world</span></h1>
             <div className="input-group">
                <input type="search" id="searchBox" placeholder="Filtrar..." />
            </div>
        </nav>
    )
}

export default Navbar
