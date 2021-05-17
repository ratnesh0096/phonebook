import React from 'react';

const Favourite = ({favourite}) => {
    return (
        <>
            <h1>Favourite</h1>
            <h4>Phone | First Name | Last Name | Date of Birth | Occupation | Email ID |  Designation</h4>
            {
                favourite.map((contact) => {
                    return <>
                       <h4>{contact.phone}
                            {contact.fname}
                            {contact.lname}
                            {contact.dob}
                            {contact.occupation}
                            {contact.email}
                            {contact.designation}
                        </h4>
                        
                        <button>Un-Favourite</button>
                    </>
                })
            }

        </>
    );
};

export default Favourite;