import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Entities/Contact";
import TextField from '@mui/material/TextField';
import contactsJson from "./data/telefonbuch.json";
import CardComp from "./Components/ContactComp/CardComp";


function App() {
const [query, setQuery] = useState("")


  return (
    <div className="App">
        <TextField
            id="outlined-basic"
            label="Telefonbuch durchsuchen..."
            variant="outlined"
        onChange={event=>setQuery(event.target.value)}/>
        {contactsJson.filter(contact=>{
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
}


export default App;
