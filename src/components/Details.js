import React from 'react';
import useDetails from './useDetails';
import validateDetails from './validateDetails';

const Details = ({ allContacts, setContacts }) => {
    // const [allContacts, setContacts] = useState([]);
    const { handleSubmit, handleInput, userRegistration, isValid, isSubmitted } = useDetails(validateDetails, allContacts, setContacts);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <br />
                    <input type="number"
                        name="phone"
                        value={userRegistration.phone}
                        onChange={handleInput}
                    />
                    {isValid.phone && <p>Invalid phone number</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="">First Name</label>
                    <br />
                    <input type="text"
                        name="fname"
                        value={userRegistration.fname}
                        onChange={handleInput}
                    />
                    {isValid.fname && <p>Invalid first name </p>}
                </div>
                <br />                <div>
                    <label htmlFor="">Last Name</label>
                    <br />
                    <input type="text"
                        name="lname"
                        value={userRegistration.lname}
                        onChange={handleInput}
                    />
                    {isValid.lname && <p>Invalid last name</p>}
                </div>
                <br />                <div>
                    <label htmlFor="">Date of Birth</label>
                    <br />
                    <input type="date"
                        name="dob"
                        value={userRegistration.dob}
                        onChange={handleInput}
                    />
                    {isValid.phone && <p>Date of birth required </p>}
                </div>
                <br />                <div>
                    <label htmlFor="">Occupation</label>
                    <br />
                    <input type="text"
                        name="occupation"
                        value={userRegistration.occupation}
                        onChange={handleInput}
                    />
                    {isValid.occupation && <p>Invalid occupation</p>}
                </div>
                <br />                <div>
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email"
                        name="email"
                        value={userRegistration.email}
                        onChange={handleInput}
                    />
                    {isValid.email && <p>Invalid email </p>}
                </div>
                <br />                <div>
                    <label htmlFor="">Designation</label>
                    <br />
                    <input type="text"
                        name="designation"
                        value={userRegistration.designation}
                        onChange={handleInput}
                    />
                    {isValid.designation && <p>Invalid designation</p>}
                </div>
                <br />
                <button>Add to Phonebook</button>
            </form>
        </>
    );
};

export default Details;