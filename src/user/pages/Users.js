import React from "react";
import UserList from "../components/UserList/UserList";

function Users() {
  const USERS = [
    {
      id: 1,
      name: "Srikanth",
      image:
        "https://blog.thomascook.in/wp-content/uploads/2017/01/Santorini-Greece.jpg",
      places: 3,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
}

export default Users;
