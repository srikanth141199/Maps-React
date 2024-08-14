import React from "react";
import "./UserItem.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";

function UserItems({ user }) {
  const { id, name, image, places } = user;
  const placeCount = places.length;
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={`http://localhost:5000/${image}`} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItems;
