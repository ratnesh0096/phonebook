import React, { useEffect, useState } from 'react';

const AllContacts = ({ allContacts, favourite, setFavourite, setContacts }) => {
    const [searchText, setSearchText] = useState("");
    const copiedContacts = [...allContacts];

    copiedContacts.sort((a, b) => {
        let fa = a.fname.toLowerCase(),
            fb = b.fname.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    /* Search Functionality */
    // useEffect(()=>{
    //     const searchedContact=allContacts.filter(
    //         (contact)=>{
    //             console.log(searchText);
    //             contact.fname.toLowerCase().includes(searchText);
    //         }
    //     )
    //     console.log(searchedContact);
    // }, [searchText])

    const handleClick=(id)=>{
        // const copiedAllContacts=[...allContacts];
        const index=copiedContacts.findIndex((contact)=>contact.id===contact.id);
        alert(index);
    //     copiedAllContacts[index].isFavourite=true;
    //     setContacts(copiedAllContacts);
    //     const copiedFavourite=[...favourite];
    //     copiedFavourite.push(contact);
    //     setFavourite(copiedFavourite);
    }
    return (
        <div>
            <h1>All Contacts</h1>
            <input
                type="text"
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }}
                placeholder="Search contact"
            />
            <button>Search</button>
            <h4>{searchText}</h4>
            <h4>Phone | First Name | Last Name | Date of Birth | Occupation | Email ID |  Designation</h4>
            {
                copiedContacts.map((contact) => {
                    return <>
                        { !searchText && <h4 key={contact.id}>{contact.phone}
                            {contact.fname}
                            {contact.lname}
                            {contact.dob}
                            {contact.occupation}
                            {contact.email}
                            {contact.designation}
                        </h4>
                        }
                        {!contact.isFavourite && <button onClick={()=>handleClick(contact.id)}>Favourite</button>}
                        {/* {clicked && <button onClick={(contact)=>handleClick}>Un-Favourite</button>} */}
                    </>
                })
            }
        </div>
    );
};

export default AllContacts;