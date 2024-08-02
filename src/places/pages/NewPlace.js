import React from "react";
import "./NewPlace.css";
import Input from "../../shared/components/ForElements/Input/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

function NewPlace() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title!!"
      />
    </form>
  );
}

export default NewPlace;
