import React, { useEffect, useState } from "react";
import UserList from "../components/UserList/UserList";
import ErrorModal from "../../shared/components/UIElements/Error/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

function Users() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();
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
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+ "/users"
        );
        setLoadedUsers(responseData.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
}

export default Users;
