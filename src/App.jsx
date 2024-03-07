import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const searchContact = searchName => {
    if (searchName.trim() === '') {
      setContacts(contactsData);
    } else {
      const findContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setContacts(findContact);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchContact={searchContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
