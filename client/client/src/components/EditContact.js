import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/contacts";

const EditContact = ({ updateContactHandler }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  let { id } = useParams("id");
  useEffect(() => {
    api
      .get(`/${id}`, { name, email })
      .then((res) => {
        console.log("ok");
        setName(res.data.user.name);
        setEmail(res.data.user.email);
      })
      .catch((error) => console.log(error));
  }, []);

  const update = (e) => {
    e.preventDefault();
    api.put(`/${id}`, { name, email }).then(() => {
      console.log("success").catch((err) => {
        console.log(err);
      });
    });
    navigate("/");
  };

  return (
    <>
      <div className="ui main container">
        <h2 style={{ marginTop: "10%" }}> Edit Contact</h2>
        <form className="ui form">
          <div className="field">
            <label> Name </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label> Email </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email ? email : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue" onClick={update}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditContact;
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
