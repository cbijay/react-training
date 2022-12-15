import React, { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const newResponse = await response.json();
    setUsers(newResponse);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h3>Users</h3>
      {users.length > 0 ? (
        users.map((user, index) => <User key={index} user={user} />)
      ) : (
        <p>No users exist!!</p>
      )}
    </>
  );
};

export default UserList;
