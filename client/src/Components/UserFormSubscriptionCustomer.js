import React, {useState} from 'react'
import './CSS/UseFormSubscriptionCustomer.css'
import FormUserDetails from './FormUserDetails'

function UserFormSubscriptionCustomer() {

    const [step, setStep] = useState(1);
    
    

    switch(step){
        case 1:
            return(
                <FormUserDetails/>
            )

        case 2:
            return(
                <h2>Test</h2>
            ) 
    }
}

export default UserFormSubscriptionCustomer
