import React from 'react'
import './CSS/UseFormSubscriptionCustomer.css'

const FormUserDetails = ({NextStep}) => {

    return (
        <div>
            <div className="subscr-customer">
                <div className="subscr-customer-container">
                    <div className="subscr-customer-inputform">
                        <label>Voornaam</label>
                        <input className="input-field" type="text" name="naam"/>
                        <label>Achternaam</label>
                        <input className="input-field" type="text" name="naam"/>
                        <label>Telefoonnummer</label>
                        <input className="input-field" type="text" name="naam"/>
                        <label>E-mail</label>
                        <input className="input-field" type="text" name="naam"/>
                    </div>
                    <div className="subscr-customer-footer">
                        <button id="next-back-btn">Terug</button>
                        <button id="next-back-btn" onClick={NextStep}>Verder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUserDetails
