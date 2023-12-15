import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      }
    </ul>
  );
}
