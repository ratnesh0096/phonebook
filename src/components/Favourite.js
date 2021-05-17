import React from 'react';

const Favourite = ({ allContacts, favourite, setFavourite, setContacts }) => {
    const handleClick=(index)=>{
        const copiedAllContacts=[...allContacts];
        copiedAllContacts[index].isFavourite=false;
        setContacts(copiedAllContacts);
        const copiedFavourite=[...favourite];
        copiedFavourite.splice(index,1)       
        setFavourite(copiedFavourite);
    }
    return (
        <>
            <h1>Favourite</h1>
            <h4>Phone | First Name | Last Name | Date of Birth | Occupation | Email ID |  Designation</h4>
            {
                favourite.map((contact, index) => {
                    return <>
                       <h4>{contact.phone}
                            {contact.fname}
                            {contact.lname}
                            {contact.dob}
                            {contact.occupation}
                            {contact.email}
                            {contact.designation}
                        </h4>
                        
                        <button onClick={()=>handleClick(index)}>Un-Favourite</button>
                    </>
                })
            }

        </>
    );
};

export default Favourite;