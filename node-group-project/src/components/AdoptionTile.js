import React from "react"

const AdoptionTile = props => {
  return <option value={props.petId}>{props.petName}</option>
}

export default AdoptionTile;
