import { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(contact);

    setContact(({ name, number }) => ({
      name: '',
      number: '',
    }));
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form}
            onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="contacName">Name: </label>
        <input
          type="text"
          id="contacName"
          name="name"
          onChange={handleChange}
          value={contact.name}
          required
        />
        <label htmlFor="contacNamber">Number: </label>
        <input
          type="tel"
          id="contacNamber"
          name="number"
          onChange={handleChange}
          value={contact.number}
          required
        />
        <button
          className={css.formBtn}
          type="submit"
        >Add contact
        </button>
      </form>
    </div>
  );
}
