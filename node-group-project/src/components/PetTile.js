import React from "react"
import { Link } from "react-router-dom"
import ageToString from "../functions/ageToString.js"

const PetTile = props => {
  let age = ageToString(props.age);

  return (
    <div className="pet-tile row">
      <Link to={`/pets/${props.name}`} className="pet-thumbnail float-left margin-right-1 margin-left-2 margin-bottom-1"><img src={props.thumbnail} alt={`${props.name}: ${props.breed}`} /></Link>
      <div>
        <h2 className="center-text"><Link to={`/pets/${props.name}`}> {props.name} </Link></h2>
        <p className="center-text">
          {props.description} <br />
          {props.breed}, {age}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default PetTile
