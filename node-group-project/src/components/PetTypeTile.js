import React from "react"
import { Link } from "react-router-dom"

const PetTypeTile = props => {
  return (
    <div className="pet-type-tile">
      <p>
        Type: {props.name} <br/>
        Breed: <Link to={`/pets/${props.breed}`}> {props.breed} </Link><br/>
        Category: {props.category}<br/><br/>
        Description: {props.description}<br/>
        <Link to={`/pets/${props.breed}`}><img src={props.thumbnail} alt={`A {props.name}: {props.breed}`} /></Link>
      </p>
      <hr />
    </div>
  )
}

export default PetTypeTile
