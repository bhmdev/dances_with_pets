import React from "react"
import ageToString from "../functions/ageToString.js"

const PetShow = props => {
  let age = ageToString(props.age);

  return (
    <div className="pet-show">
      <h2>{props.name}</h2>
      <p>{age}</p>
      <img src={props.thumbnail} alt={`A {pet.pet_name}`}/>
      <p><br/>Vaccinated: {props.vaccination}</p>
      <p>About {props.name}: {props.adoption_story}</p>
      <p>Breed: {props.breed}</p>
    </div>
  )
}
export default PetShow