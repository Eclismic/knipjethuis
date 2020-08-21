import React from 'react'
import {useHistory} from 'react-router-dom' 

const Subscription = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");

        console.log("gelukt")
    }

    return (
        <div className="subscription-wrapper">
            <div>
                <button id="back-button"  onClick={handleClick}>back</button>
            </div>
            <div className="subscription-container">
                <div className="suscription-header">
                    <h2>Aanmelden</h2>
                </div>
                <div className="subscription-company">
                    <div className="company-arrow-title">
                        <h1>Aanmelden bedrijf</h1>
                        <svg className="subscription-arrow" width="32" height="32" viewBox="0 0 24 24" fill="none" size="32"><path d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"><path d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"></path></path></svg>
                    </div>

                    <hr></hr>
                </div>
                <div className="subscription-customer">
                    <div className="customer-arrow-title">
                        <h1>Aanmelden klant</h1>
                        <svg className="subscription-arrow" width="32" height="32" viewBox="0 0 24 24" fill="none" size="32"><path d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"><path d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"></path></path></svg>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default Subscription