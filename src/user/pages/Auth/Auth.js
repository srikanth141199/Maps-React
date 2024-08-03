import React, { useState } from "react";
import Card from "../../../shared/components/UIElements/Card/Card";
import Input from "../../../shared/components/ForElements/Input/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";
import useForm from "../../../shared/hooks/form-hook";
import Button from "../../../shared/components/ForElements/Button/Button";

import "./Auth.css";

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
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

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode(!isLoginMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required!!</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
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
          {isLoginMode ? "Login" : "SignUp"}
        </Button>
      </form>

      <Button onClick={switchModeHandler} inverse>
        Switch to {isLoginMode ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
}

export default Auth;
