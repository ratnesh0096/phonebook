import { useState } from "react";
import validateDetails from "./validateDetails";
const useDetails = (validateDetails,allContacts, setContacts) => {
    const [userRegistration, setUserRegistration] = useState(
        {
            phone: "",
            fname: "",
            lname: "",
            dob: "",
            occupation: "",
            email: "",
            designation: ""
        }
    );
    const [isValid, setValidation] = useState({})
    const [isSubmitted, setSubmisson] = useState(false);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserRegistration({ ...userRegistration, [name]: value })
        // console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValidation(validateDetails(userRegistration));
        if (!isValid /*Object.keys(isValid).length === 0*/) { 
            setSubmisson(true);
            const copiedContacts=[...allContacts];
            copiedContacts.push(userRegistration); 
            setContacts(copiedContacts);
            setValidation({});
            console.log("here");

        }
        else setSubmisson(false);


        console.log(allContacts);
    }
    return { handleSubmit, handleInput, userRegistration, isValid, isSubmitted };
};

export default useDetails;