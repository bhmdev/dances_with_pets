import React, { useEffect, useState } from "react"
import Error404 from "./Error404"
import PetShow from "./PetShow"
import capFirstLetter from "../functions/capFirstLetter.js"

const PetShowContainer = props => {
  const [pet, setPet] = useState(null);
  
  useEffect(() => {
    fetch(`/api/v1/pets/${props.match.params.name}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(content => {
        setPet(content.pets[0])
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  if (pet) {
    return (
      <PetShow
        name={pet.name}
        thumbnail={pet.pet_img_url}
        vaccination={pet.vaccination_status ? 'Yes' : 'No'}
        adoption_story={pet.adoption_story}
        breed={capFirstLetter(pet.breed)}
        age={pet.age}
      />
    );
  } else { return <Error404 error={`Sorry, but that but that pet isn't registered at our shelter.`} linkTo={`pets`} /> } 
}

export default PetShowContainer