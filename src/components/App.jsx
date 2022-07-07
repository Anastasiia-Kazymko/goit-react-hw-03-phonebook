import React from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
