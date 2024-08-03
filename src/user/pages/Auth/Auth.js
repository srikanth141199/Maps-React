import React from "react";
import Card from "../../../shared/components/UIElements/Card/Card";
import Input from "../../../shared/components/ForElements/Input/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
import useForm from "../../../shared/hooks/form-hook";
import Button from "../../../shared/components/ForElements/Button/Button";

import "./Auth.css"

function Auth() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <Card className="authentication">
      <h2 >Login Required!!</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email!!"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid Password!!"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Auth;
