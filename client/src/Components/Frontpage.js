import React from 'react'
import { Link } from 'react-router-dom'

const Frontpage = () => {
    return (
        <div className="frontpage-wrapper">
            <div className="frontpage-s1">
                <div className="nav-wrapper">
                    <Link to="/cut@home-request">
                        <button id="add-haircut">Voeg toe</button>
                    </Link>
                    <Link to="/cut@salon-request">
                        <button id="add-haircut">KnipJeBijSalon</button>
                    </Link>
                    <button id="add-haircut">LaatJeInspireren</button>
                    <button id="add-haircut">LogIn</button>
                    <Link to="/subscribe">
                        <button id="add-haircut">MeldJeAan</button>
                    </Link>
                    
                </div>
                <div className="title-wrapper">
                    <h4>KnipJeThuis</h4>
                    <p>Voeg jouw knipbeurt toe en zie we er tijd voor je heeft!</p>
                </div>
            </div>
            <div className="frontpage-s2">
                <h3 style={{ color: "black" }}>Further explanation</h3>
            </div>
        </div>
    )
}

export default Frontpage
