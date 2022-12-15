import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const loadUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const newResponse = await response.json();
    setUser(newResponse);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div className="card">
        <h2>User #{id}</h2>
        <h3>Name: {user.name}</h3>
        <h4>Email: {user.email}</h4>
        <h4>Phone: {user.phone}</h4>
      </div>
    </>
  );
};

export default UserDetail;
