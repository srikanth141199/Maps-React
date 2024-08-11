import React, { useContext } from "react";
import "./NewPlace.css";
import Input from "../../shared/components/ForElements/Input/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/ForElements/Button/Button";
import useForm from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/Error/ErrorModal";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";

function NewPlace() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    //console.log(formState.inputs);

    try {
      await sendRequest(
        "http://localhost:5000/api/places",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error && <ErrorModal error={error} onClear={clearError} />}
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Title!!"
          onInput={inputHandler}
        />

        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description, at least 5 characters!!"
          onInput={inputHandler}
        />

        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
}

export default NewPlace;
