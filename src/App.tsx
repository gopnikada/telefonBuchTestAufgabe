import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import CardComp from "./Components/ContactComp/CardComp";


function App() {
    const [query, setQuery] = useState("")
    const [contacts, setContacts] = useState([])

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:3030/api/getcontacts`)
            .then((res) => res.json())
            .then(actualData => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map(({ name }) => (
                        <li >
                            <h3>{name}</h3>
                        </li>
                    ))}
            </ul>
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
