import React from "react"
const PetShow = props => {
  return (
    <div className="pet-show">
      <h2>{props.name}</h2>
      <p>{props.ageYears} years and {props.ageMonths} months old</p>
      <img src={props.thumbnail} alt={`A {pet.pet_name}`}/>
      <p>Vaccinated: {props.vaccination}</p>
      <p>About {props.name}: {props.adoption}</p>
      <p>Breed: {props.breed}</p>
    </div>
  )
}
export default PetShow