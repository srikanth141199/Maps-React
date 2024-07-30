import React from "react";
import UserList from "../components/UserList/UserList";

function Users() {
  const USERS = [
    {
      id: 1,
      name: "Srikanth",
      image:
        "https://4kwallpapers.com/images/wallpapers/luffy-laughing-one-5120x2880-12358.png",
      placeCount: 3,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
}

export default Users;
