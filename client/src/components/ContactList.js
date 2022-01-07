import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import api from "../api/contacts";

export default function ContactList() {
  const [contact, setContact] = useState([]);
  const renderContactList = contact.map((contact) => {
    return <ContactCard contact={contact} key={contact._id} />;
  });

  useEffect(() => {
    //api call

    api.get("/").then((res) => {
      setContact(res.data.user);
      console.log(res.data);
    });
  }, [contact]);

  return (
    <div className="container">
      <h2 style={{ marginTop: "10%" }}>
        Contacts
        <Link to="/add">
          <button className="ui button blue right" style={{ marginLeft: "5%" }}>
            Add contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
