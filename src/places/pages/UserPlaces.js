import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList/PlaceList";
import { useParams } from 'react-router-dom';
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/Error/ErrorModal";

function UserPlaces() {
    const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  //const loadedPlaces = Dummy_Places.filter(ele => ele.creator === userId)

  useEffect(()=>{
    const fetchData = async ()=>{
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/api/places/user/${userId}`
          );
          setLoadedPlaces(responseData.places);
        } catch (error) {
          console.log(error);
        }

    };

    fetchData();

  }, [sendRequest, userId])

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorModal error={error} onClear={clearError} />}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </>
  );
}

export default UserPlaces;
