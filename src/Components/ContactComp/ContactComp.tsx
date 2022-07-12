import React from 'react';
const ContactComp = (contact:any) => {
    return (
        <div>
            Name is {contact.name} and phone is {contact.phone}
        </div>
    );
};

export default ContactComp;