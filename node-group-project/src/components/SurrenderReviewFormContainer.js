import React, { useState } from "react"

const SurrenderReviewFormContainer = props => {
  const [newSurrenderReviewApplication, setNewSurrenderReviewApplication] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    PetName: "",
    PetAge: "",
    PetType: "",
    PetImage: "",
    VaccinationStatus: "",
    ApplicationReviewDecision: ""
  })
  const handleChange = event => {
    setNewSurrenderReviewApplication({
      ...newSurrenderReviewApplication,
      [event.target.id]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.addSurrenderReviewApplication(newSurrenderReviewApplication)
    clearForm()
  }
  const clearForm = () => {
    setNewSurrenderReviewApplication({
      Name: "",
      PhoneNumber: "",
      Email: "",
      PetName: "",
      PetAge: "",
      PetType: "",
      PetImage: "",
      VaccinationStatus: "",
      ApplicationReviewDecision: ""

    })
  }
  return (
    <form onSubmit={handleSubmit} className="new-surrender-review-application-form callout">
      <h2> Surrender Review Application</h2>
      <div>
        <label> Name:
          <input
            type="text"
            name="surrenderReviewApplication[name]"
            value={newSurrenderReviewApplication.name}
            onChange={handleChange}
          ></input>
        </label>
        <label> Phone Number:
          <input
            type="text"
            name="surrenderReviewApplication[phoneNumber]"
            value={newSurrenderReviewApplication.phoneNumber}
            onChange={handleChange}
          ></input>
        </label>
        <label> Email:
          <input
            type="text"
            name="surrenderReviewApplication[email]"
            value={newSurrenderReviewApplication.email}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Name:
          <input
            type="text"
            name="surrenderReviewApplication[petName]"
            value={newSurrenderReviewApplication.petName}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Age:
          <input
            type="text"
            name="surrenderReviewApplication[petAge]"
            value={newSurrenderReviewApplication.petAge}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Type:
          <input
            type="text"
            name="surrenderReviewApplication[petType]"
            value={newSurrenderReviewApplication.petType}
            onChange={handleChange}
          ></input>
        </label>
        <label>Select Pet Type
          <select name="surrenderReviewApplication[petType]" onChange={handleChange} value={newSurrenderReviewApplication.petType}>
            <option value="default" disabled hidden>Select Pet Type</option>
            <option value="Domesticated">Domesticated</option>
            <option value="Exotic">Exotic</option>
            <option value="Mythical">Mythical</option>
          </select>
        </label>
        <label>Pet Image:
          <input
            type="text"
            name="surrenderReviewApplication[petImage]"
            value={newSurrenderReviewApplication.petImage}
            onChange={handleChange}
          ></input>
        </label>
        <label>Is this pet vaccinated?
          <select name="surrenderReviewApplication[petType]" onChange={handleChange} value={newSurrenderReviewApplication.vaccinationStatus}>
            <option value="default" disabled hidden>Vaccination Status</option>
            <option value="TRUE">Yes</option>
            <option value="FALSE">No</option>
          </select>
        </label>
        <label>Application Review Decision
          <input
            type="text"
            name="surrenderReviewApplication[applicationReviewDecision]"
            value={newSurrenderReviewApplication.applicationReviewDecision}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default SurrenderReviewFormContainer
