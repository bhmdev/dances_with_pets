import React, { useState, useEffect } from "react"

import AdoptionTile from "./AdoptionTile"

const AdoptionForm = props => {
  const emptyApplication = {
    name: "",
    phone_number: "",
    email: "",
    home_status: "default",
    pet_id: "default"
  };

  const [newApplication, setNewApplication] = useState(emptyApplication);
  const [pets, setPets] = useState([]);

  const handleInputChange = event => {
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleFormSubmission(newApplication);
    setNewApplication(emptyApplication);
  }

  const clearForm = () => {
    event.preventDefault();
    setNewApplication(emptyApplication);
  }

  useEffect(() => { 
    let fetchString = `/api/v1/pets`;
    if (props.petName) { fetchString += `:${props.petName}`; }
    fetch(fetchString)
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
      setPets(content.pets)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const adoptionTiles = pets.map(pet => {
    return (
      <AdoptionTile
        key={pet.id}
        petId={pet.id}
        petName={pet.name}
      />
    )
  })

  return (
    <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2>Adoption Application</h2>
      <label>Name *
        <input
          type="text"
          name="name"
          placeholder="Jackson Galaxy"
          value={newApplication.name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Phone Number *
        <input
          type="text"
          name="phone_number"
          placeholder="1-555-667-2287"
          value={newApplication.phone_number}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Email *
        <input
          type="text"
          name="email"
          placeholder="jackson@mycatfromhell.com"
          value={newApplication.email}
          onChange={handleInputChange}
        ></input>
      </label>
      <div className="inline-block medium-5 cell margin-right-1">
        <div className="inline-block medium-6 cell margin-right-1">
          <label>Select Pet *
            <select name="pet_id" onChange={handleInputChange} value={newApplication.pet_id}>
              <option value="default" disabled hidden>Select a pet</option>
              {adoptionTiles}
            </select>
          </label>
        </div>
      </div>
      <div className="inline-block medium-6 cell margin-right-1">
        <div className="inline-block medium-6 cell margin-right-1">
          <label>Select Home Status *
            <select name="home_status" onChange={handleInputChange} value={newApplication.home_status}>
              <option value="default" disabled hidden>Select Home Status</option>
              <option value="rent">Rent</option>
              <option value="own">Own</option>
            </select>
          </label>
        </div>
      </div>
      <p id="require-descriptor">* denotes a required field</p>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" id="clear-button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default AdoptionForm