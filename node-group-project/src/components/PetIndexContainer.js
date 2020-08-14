import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"
import getPath from "../functions/getPath.js"
import capFirstLetter from "../functions/capFirstLetter.js"

const PetTypeIndexContainer = props => {
  const [pets, setPets] = useState([])
  let petsListed, path;
  
  path = getPath()
  petsListed = (path.length>1 ? path[1] : path[0]);
  if (petsListed === `past-pets`) {petsListed = `past pets`}
  else if (path[0] === `classification`) {
    if (path[1] === `domesticated`) { petsListed = `domestic`}
    petsListed += ` pets`
  } else if (path.length>1) {
    while (petsListed.includes('%20')) {
      petsListed = petsListed.replace('%20', ' ');
    }
    if (petsListed.charAt(petsListed.length-1) === `s`) { petsListed += `es`; }
    else { petsListed += `s`; };
  }

  useEffect(() => {
    let fetchString = `/api/v1/${path[0]}${path.length>1 ? `/${path[1]}` : ``}`;
    fetch(fetchString)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        setPets(body.pets);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  },[path])

  const petTiles = pets.map(pet => {
    return (
      <PetTile
        key={pet.id}
        name={pet.name}
        breed={capFirstLetter(pet.breed)}
        age={pet.age}
        description={pet.description}
        thumbnail={pet.pet_img_url}
      />
    )
  })

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1 className="center-text">View our {petsListed}!</h1>
        <hr />
        {petTiles }
      </div>
    </div>
  )
}

export default PetTypeIndexContainer