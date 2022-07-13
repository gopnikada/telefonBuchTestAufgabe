import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import CardComp from "./Components/ContactComp/CardComp";


function App() {
const [query, setQuery] = useState("")
const [contacts, setContacts] = useState([])
 const [error, setError] = useState(null);
 const [isLoaded, setIsLoaded] = useState(false);
 const [items, setItems] = useState("");

 useEffect(() => {
  fetch("https://api.npms.io/v2/search?q=react", {mode: 'no-cors'})
      .then(res => res.json())
      .then(
          (result) => {
           setIsLoaded(true);
           setItems(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
           setIsLoaded(true);
           setError(error);
          }
      )
 }, [])


    if (error) {
        return <div>Ошибка:{error} </div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
           <div>
               {items}
           </div>
        );
    }
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
