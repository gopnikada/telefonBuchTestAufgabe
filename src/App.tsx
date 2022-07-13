import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import CardComp from "./Components/ContactComp/CardComp";
import Contact from "./Entities/Contact";


function App() {
    const [query, setQuery] = useState("")
    const contactsInit = Array<Contact>;
    const [contacts, setContacts] = useState(contactsInit)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:3030/api/getcontacts`)
            .then((res) => res.json())
            .then(actualData => {
                setContacts(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setContacts([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            {loading && <h1>A moment please...</h1>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            <TextField
                    id="outlined-basic"
                    label="Telefonbuch durchsuchen..."
                    variant="outlined"
                onChange={event=>setQuery(event.target.value)}/>

            {contacts.filter(contact=>{
                        if (query === '') {
                            return contact;
                        } else if (contact.name.toLowerCase().includes(query.toLowerCase())) {
                            return contact;
                        }
                    })
                        .map((contact)=>(
                            <CardComp className="box" name={contact.name} phone={contact.phone} query={query}></CardComp>
                    ))}
        </div>
    );

//  return (
//
//
// <div>123</div>
    // <div className="App">
    //     <TextField
    //         id="outlined-basic"
    //         label="Telefonbuch durchsuchen..."
    //         variant="outlined"
    //     onChange={event=>setQuery(event.target.value)}/>
    //     {contactsJson.filter(contact=>{
    //         if (query === '') {
    //             return contact;
    //         } else if (contact.name.toLowerCase().includes(query.toLowerCase())) {
    //             return contact;
    //         }
    //     })
    //         .map((contact)=>(
    //             <CardComp className="box" name={contact.name} phone={contact.phone} query={query}></CardComp>
    //     ))}
    // </div>
    //);
}


export default App;
