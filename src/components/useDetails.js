import { useEffect, useState } from "react";
import validateDetails from "./validateDetails";
import  { Redirect } from 'react-router-dom'
const useDetails = (validateDetails, allContacts, setContacts) => {
    // const [change, setChange]=useState(0);
    const [userRegistration, setUserRegistration] = useState(
        {
            id:Date.now(),
            phone: "",
            fname: "",
            lname: "",
            dob: "",
            occupation: "",
            email: "",
            designation: "",
            isFavourite:false
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
        // console.log(e.target.value);
    }

    useEffect(() => {     
        if (Object.keys(isValid).length === 0) {
            // setSubmisson(true);
            const copiedContacts = [...allContacts];
            copiedContacts.push(userRegistration);
            setContacts(copiedContacts);
            alert("Contact Succesfully Added");
            // setValidation({});
            // console.log("here");
        }

    }, [isValid])

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidation(validateDetails(userRegistration))
        
        return <Redirect to='/all'  />

        console.log(isValid);
        console.log(Object.keys(isValid).length);
    }
    return { handleSubmit, handleInput, userRegistration, isValid /*, isSubmitted */ };
};

export default useDetails;