import React from "react";
import "./UserItems.css";

function UserItems({ user }) {
  const { name, image, places } = user;
  return (
    <div className="UserItem">
      <div className="userItem_image">
        <img src={image} alt={name} />
      </div>
      <div className="userItem_info">
        <h2>{name}</h2>
        <h3>{places}</h3>
      </div>
    </div>
  );
}

export default UserItems;
