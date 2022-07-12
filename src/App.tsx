import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Entities/Contact";
import ContactComp from "./Components/ContactComp/ContactComp";
import TextField from '@mui/material/TextField';
import contactsJson from "./data/telefonbuch.json";


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
            .map((contact, index)=>(
            <div className="box">
                <Highlighted text={contact.name} highlight={query}></Highlighted>
                <p>{contact.phone}</p>
            </div>
        ))}
    </div>
  );
}

const Highlighted = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
        <span>
      {parts.filter(String).map((part, i) => {
          return regex.test(part) ? (
              <mark key={i}>{part}</mark>
          ) : (
              <span key={i}>{part}</span>
          );
      })}
    </span>
    );
};

export default App;
