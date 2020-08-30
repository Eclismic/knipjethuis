import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Frontpage = () => {

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

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

                    {isAuthenticated ?
                        <div id="logged-in">
                            <span style={{color: 'white'}}>Hello {user.name}</span>
                            <button style={{borderRadius: '12px'}} onClick={() => logout({ returnTo: window.location.origin })}>
                                Uitloggen
                             </button>
                        </div> 
                        : <button id="add-haircut" onClick={loginWithRedirect}>Log in</button>}
                        
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
