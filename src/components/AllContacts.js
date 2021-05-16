import React from 'react';

const AllContacts = ({allContacts}) => {
    return (
        <div>
            <h1>All Contacts</h1>
            <h4>Phone | First Name | Last Name | Date of Birth | Occupation | Email ID |  Designation</h4>
            {
                allContacts.map((contact)=>{
                    return <>
                    <h4>{contact.phone} {contact.fname} {contact.lname} {contact.dob} {contact.occupation} {contact.email} {contact.designation}</h4>
                    </>
                })
            }
        </div>
    );
};

export default AllContacts;