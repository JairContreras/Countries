import React from "react";
import Navbar from "./components/navbar";
import TableCountries from "./components/TableCountries";
import "./styles.css";
function App() {
    return (
        <div className="main">
            <Navbar/>
            <TableCountries/>
        </div>
    );
}

export default App;