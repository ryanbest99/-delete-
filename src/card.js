import React, { useState } from "react";
import data from "./data";

function Card() {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <div className="card">
      <h1>Hello </h1>
      {people.map(function (person) {
        console.log(person);
        return (
          <div key={person.id} className="person">
            <h3>{person.img}</h3>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
