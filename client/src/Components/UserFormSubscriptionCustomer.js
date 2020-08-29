import React, {useState} from 'react'
import './CSS/UseFormSubscriptionCustomer.css'
import FormUserDetails from './FormUserDetails'

const UserFormSubscriptionCustomer = () => {

    const [step, setStep] = useState(1);
    

    switch(step){
        case 1:
            console.log("test case 1");
            return(
                <FormUserDetails 
                NextStep={() => setStep(2)}
                />
            )

        case 2:
            console.log("test case 2");

            return(
                <h2>Test</h2>
            ) 
    }
}

export default UserFormSubscriptionCustomer
