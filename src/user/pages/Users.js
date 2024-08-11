import React, { useEffect, useState } from "react";
import UserList from "../components/UserList/UserList";
import ErrorModal from "../../shared/components/UIElements/Error/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner/LoadingSpinner";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  // const USERS = [
  //   {
  //     id: 'u1',
  //     name: "Srikanth",
  //     image:
  //       "https://4kwallpapers.com/images/wallpapers/luffy-laughing-one-5120x2880-12358.png",
  //     placeCount: 3,
  //   },
  // ];

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5000/api/users");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedUsers(responseData.users);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <div className="center">
          <LoadingSpinner />
        </div>}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
}

export default Users;
