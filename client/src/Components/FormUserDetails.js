import React from 'react'
import './CSS/UseFormSubscriptionCustomer.css'

const FormUserDetails = ({NextStep}) => {

    const Continue = () => {
    }

    return (
        <div>
            <div className="subscr-customer">
                <div className="subscr-customer-container">
                    <div className="subscr-customer-footer">
                        <button id="next-back-btn">Terug</button>
                        <button id="next-back-btn" onClick={NextStep()}>Verder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUserDetails
