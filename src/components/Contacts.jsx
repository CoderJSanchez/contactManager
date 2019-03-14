import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Sussy Sue",
        email: "sSue@gmail.com",
        phone: "333-555-5555"
      },
      {
        id: 3,
        name: "Karen Williams",
        email: "kWilliams@gmail.com",
        phone: "444-555-5555"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </>
    );
  }
}

export default Contacts;
