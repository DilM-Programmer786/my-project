import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/contacts";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();

    if (name === "" || email === "") return alert("Please fill all field");
    api
      .post("/", { name, email })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("created_at", "4-08-2020");
        localStorage.setItem("status", "active");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <>
      <div className="ui main container">
        <h2 style={{ marginTop: "10%" }}> Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label> Name </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label> email </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue" onClick={add}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
// export default class AddContact extends Component {
//     state = {
//         name: "",
//         email: "",
//      };

//      //  navigate = useNavigate();
//      add = (e) =>{
//          // let navigate = useNavigate();
//         // Don't want our page to refresh
//          e.preventDefault();
//          if(this.state.name === "" || this.state.email=== ""){
//              alert("All Fields are Mandatory!");
//              return;
//          }

//          this.setState({name: "", email:""});
//          this.props.addContactHandler(this.state);
//          // console.log(this.state);
//          console.log(this.props);
//          // this.navigate('/');
//          this.props.history.push("/");
//          // <Redirect from="/add" to="/" />
//      };

//      render() {
//          return (
//              <div className='ui main'>
//                 <h2 style={{marginTop:"10%"}}> Add Contact</h2>

//                 <form className='ui form' onSubmit={this.add}>
//                        <div className='field'>

//                           <label> Name </label>
//                           <input type="text"
//                            name="name"
//                            placeholder='Name'
//                            value={this.state.value}
//                            onChange= {(e) => this.setState({name: e.target.value})}
//                            />
//                        </div>
//                        <div className='field'>
//                           <label> Email </label>
//                           <input type="email"
//                           name="email"
//                           placeholder='Email'
//                           value={this.state.value}
//                           onChange={(e)=> this.setState({email: e.target.value})}
//                           />
//                        </div>
//                        <button className='ui button blue' onClick={this.add}>Add</button>
//                 </form>
//              </div>
//          );
//      }
//  }
