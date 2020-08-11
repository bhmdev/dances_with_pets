import React, { useEffect, useState } from "react"
import PetShow from "./PetShow"
const PetShowContainer = props => {
  const [pet, setPet] = useState(null);
  useEffect(() => {
    const petId = props.match.params.id   
    fetch(`/api/v1/pets/adopt/${petId}`)
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
    .then(content => {
      console.log('content.pet[0] = ', content.pet[0])
      setPet(content.pet[0])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])
  if (pet) {
    return (
      <PetShow
        name={pet.pet_name}
        thumbnail={pet.pet_thumbnail_url}
        vaccination={pet.pet_vaccination_status.toString()}
        adoption={pet.pet_adoption_story} 
        breed={pet.pet_type_id} 
        ageYears={pet.pet_age.split('|')[0]}
        ageMonths={pet.pet_age.split('|')[1]}
      />
    );
  } else {
    return <div>This is the pet show container</div>
  }
}
export default PetShowContainer