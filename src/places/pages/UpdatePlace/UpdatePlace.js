import React, { useEffect, useState } from "react";
import "./UpdatePlace.css";
import { useParams } from "react-router-dom";
import Input from "../../../shared/components/ForElements/Input/Input";
import Button from "../../../shared/components/ForElements/Button/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";
import useForm from "../../../shared/hooks/form-hook";
import Card from "../../../shared/components/UIElements/Card/Card";

const Dummy_Places = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous buildings in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Empire_State_Building_cropped.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9905353,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Eiffel Tower",
    description:
      "A wrought-iron lattice tower on the Champ de Mars in Paris, France",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Colosseum",
    description: "An ancient amphitheater in the center of Rome, Italy",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Colosseo_2020.jpg",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    location: {
      lat: 41.8902102,
      lng: 12.4922309,
    },
    creator: "u3",
  },
  {
    id: "p4",
    title: "Great Wall of China",
    description:
      "A series of fortifications made of various materials, located in northern China",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
    address: "Huairou, China",
    location: {
      lat: 40.4319077,
      lng: 116.5703749,
    },
    creator: "u4",
  },
  {
    id: "p5",
    title: "Sydney Opera House",
    description: "A multi-venue performing arts centre in Sydney, Australia",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Sydney_Opera_House_viewed_from_the_north.jpg",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
    location: {
      lat: -33.8567844,
      lng: 151.2152967,
    },
    creator: "u5",
  },
];

function UpdatePlace() {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = Dummy_Places.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2> Couldn't find the Place </h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="update-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title!!"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      ></Input>

      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description of atleast 5 characters!!"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      ></Input>

      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
}

export default UpdatePlace;
