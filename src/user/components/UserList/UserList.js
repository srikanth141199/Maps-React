import React from "react";
import "./UsersList.css";
import UserItems from "../UserItems/UserItems";
import Card from "../../../shared/components/UIElements/Card/Card";

function UserList({ items }) {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found </h2>
        </Card>
      </div>
    );
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
