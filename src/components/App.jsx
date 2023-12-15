import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [nameForSearch, setNameForSearch] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(contacts);
    if (contacts.length > 0) setContacts(contacts);
  }, []);

  useEffect(() => {
    if (contacts.length >= 0) {
      const contactsJson = JSON.stringify(contacts);
      localStorage.setItem('contacts', contactsJson);
    }
  }, [contacts]);

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };

    if (contactCheck(contacts, newContact)) return;

    setContacts(prevState => ([
      ...prevState,
      newContact,
    ]));
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const contactsForRender = filterArrayByName(contacts, nameForSearch);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h1>Contacts</h1>
      {
        contacts.length > 0 ? (
            <>
              <SearchContact
                setNameForSearch={setNameForSearch}
              />
              <ContactList
                contacts={contactsForRender}
                deleteContact={deleteContact}
              />
            </>
          ) :
          <p>No contacts</p>
      }
    </div>
  );
}

function contactCheck(contacts, newContact) {
  if (contacts.find(({ name }) => name.toLowerCase() ===
    newContact.name.toLowerCase())) {
    alert('Error');
    return true;
  }
  return false;
}

function filterArrayByName(array, name) {
  if (name.length > 0) {
    return array.filter(
      el => el.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return array;
  }
}
