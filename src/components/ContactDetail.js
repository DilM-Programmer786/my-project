import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import user from "../images/user.png";
import api from "../api/contacts";

export default function ContactDetail() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { id } = useParams();

  console.log("name " + name);
  console.log(id);

  useEffect(() => {
    api.get(`/${id}`).then((res) => {
      setName(res.data.user.name);
      setEmail(res.data.user.email);
    });
  }, []);
  return (
    <div className="main" style={{ marginTop: "10%" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back To Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}
