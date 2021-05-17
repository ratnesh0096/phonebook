import { useState } from "react";
import validateDetails from "./validateDetails";
const useDetails = (validateDetails, allContacts, setContacts) => {
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
    const [isValid, setValidation] = useState(
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
    // const [isSubmitted, setSubmisson] = useState(false);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserRegistration({ ...userRegistration, [name]: value })
        setValidation(validateDetails(userRegistration));
        // console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(isValid).length === 0) {
            // setSubmisson(true);
            const copiedContacts = [...allContacts];
            copiedContacts.push(userRegistration);
            setContacts(copiedContacts);
            // setValidation({});
            console.log("here");

        }
        // else setSubmisson(false);

        console.log(isValid);
        console.log(Object.keys(isValid).length);
    }
    return { handleSubmit, handleInput, userRegistration, isValid /*, isSubmitted */ };
};

export default useDetails;