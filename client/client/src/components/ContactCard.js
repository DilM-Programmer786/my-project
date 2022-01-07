import React from "react";
import user from "../images/user.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/contacts";

export default function ContactCard({ contact }) {
  const { _id, name, email } = contact;
  const navigate = useNavigate();
  const clickHandler = (id) => {
    api
      .delete(`${_id}`)
      .then((response) => {
        console.log("User delete" + response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="item d-flex justify-content-between mt-4">
      <div className="content " style={{}}>
        <div className="header mb-4">
          <p>{name}</p>
        </div>
      </div>
      <div className="mb-4"> {email} </div>
      <div>
        {" "}
        <button
          className="btn btn-danger text-white mb-4"
          style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
          onClick={clickHandler}
        >Delete</button>
      </div>
      <div className="">
        <Link to={`/edit/${_id}`} className="mt-4">
          <button
            className="btn btn-primary text-white"
            style={{ color: "blue", marginTop: "7px" }}
          >Edit</button>
        </Link>
      </div>  
    </div>
  );
}
