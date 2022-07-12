import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Entities/Contact";
import ContactComp from "./Components/ContactComp/ContactComp";
import contactsJson from "./data/telefonbuch.json";


function App() {
const [query, setQuery] = useState("")


  return (
    <div className="App">
     <input placeholder="Telefonbuch durchsuchen.." onChange={event => setQuery(event.target.value)}/>
        {contactsJson.filter(contact=>{
            if (query === '') {
                return contact;
            } else if (contact.name.toLowerCase().includes(query.toLowerCase())) {
                return contact;
            }
        })
            .map((contact, index)=>(
            <div className="box">
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
            </div>
        ))}
    </div>
  );
}

export default App;
