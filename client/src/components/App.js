import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import Error from "./Error";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" exact element={<AddContact />} />
          <Route path="/edit/:id" exact element={<EditContact />} />
          <Route path="/contact/:id" exact element={<ContactDetail />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
