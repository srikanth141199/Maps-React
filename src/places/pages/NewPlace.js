import React from "react";
import "./NewPlace.css";
import Input from "../../shared/components/ForElements/Input/Input";

function NewPlace() {
  return (
    <form className="place-form">
      <Input element = "input" type="text" label="Title" />
    </form>
  );
}

export default NewPlace;
