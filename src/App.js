import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import "./user.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
