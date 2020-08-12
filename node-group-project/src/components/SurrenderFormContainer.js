import React, { useState } from "react"

const SurrenderFormContainer = props => {
  const [newSurrenderApplication, setNewSurrenderApplication] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    PetName: "",
    PetAge: "",
    PetType: "",
    PetImage: "",
    VaccinationStatus: ""
  })
  const handleChange = event => {
    setNewSurrenderApplication({
      ...newSurrenderApplication,
      [event.target.id]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.addSurrenderApplication(newSurrenderApplication)
    clearForm()
  }
  const clearForm = () => {
    setNewSurrenderApplication({
      name: "",
      phoneNumber: "",
      email: "",
      petName: "",
      petAge: "",
      petType: "",
      petImage: "",
      vaccinationStatus: ""
    })
  }
  return (
    <form onSubmit={handleSubmit} className="new-surrender-application-form callout">
      <h2> Surrender Application</h2>
      <div>
        <label> Name:
          <input
            type="text"
            name="name"
            value={newSurrenderApplication.name}
            onChange={handleChange}
          ></input>
        </label>
        <label> Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={newSurrenderApplication.phoneNumber}
            onChange={handleChange}
          ></input>
        </label>
        <label> Email:
          <input
            type="text"
            name="email"
            value={newSurrenderApplication.email}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Name:
          <input
            type="text"
            name="petName"
            value={newSurrenderApplication.petName}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Age:
          <input
            type="text"
            name="petAge"
            value={newSurrenderApplication.petAge}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Type:
          <input
            type="text"
            name="petType"
            value={newSurrenderApplication.petType}
            onChange={handleChange}
          ></input>
        </label>
        <label>Select Pet Type
          <select name="petType" id="petType" onChange={handleChange} value={newSurrenderApplication.petType}>
            <option value="default" disabled hidden>Select Pet Type</option>
            <option value="Domesticated">Domesticated</option>
            <option value="Exotic">Exotic</option>
            <option value="Mythical">Mythical</option>
          </select>
        </label>
        <label>Pet Image:
        <input
            type="text"
            name="petImage"
            value={newSurrenderApplication.petImage}
            onChange={handleChange}
          ></input>
        </label>
        <label>Is this pet vaccinated?
          <select name="petType" id="petType" onChange={handleChange} value={newSurrenderApplication.vaccinationStatus}>
            <option value="default" disabled hidden>Vaccination Status</option>
            <option value="TRUE">Yes</option>
            <option value="FALSE">No</option>
          </select>
        </label>
      </div>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default SurrenderFormContainer
