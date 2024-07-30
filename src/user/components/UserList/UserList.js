import React from "react";
import "./UsersList.css";
import UserItems from "../UserItems/UserItems";

function UserList({ items }) {
  if (items.length === 0) {
    return <h2 className="center">No Users Found</h2>;
  }

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItems key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
