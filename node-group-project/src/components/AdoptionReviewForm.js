import React, { useState } from "react"

const AdoptionReviewForm = props => {
  const [newReview, setNewReview] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    HomeStatus: "default",
    PetName: "",
    PetAge: "",
    PetType: "",
    PetImage: "",
    VaccinationStatus: ""
  })

  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.handleFormSubmission(newReview);
    clearForm()
  }

  const clearForm = () => {
    setNewReview({
      name: "",
      phoneNumber: "",
      email: "", 
      homeStatus: "default",
      petName: "",
      petAge: "",
      petType: "",
      petImage: "",
      vaccinationStatus: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-review-application-form callout">
      <h2> Review Application</h2>
      <div>
        <label> Name:
          <input
            type="text"
            name="ReviewApplication[name]"
            value={newReview.name}
            onChange={handleChange}
          ></input>
        </label>
        <label> Phone Number:
          <input
            type="text"
            name="ReviewApplication[phoneNumber]"
            value={newReview.phoneNumber}
            onChange={handleChange}
          ></input>
        </label>
        <label> Email:
          <input
            type="text"
            name="ReviewApplication[email]"
            value={newReview.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>Home Status:
          <input
            type="text"
            name="ReviewApplication[homeSatus]"
            value={newReview.homeStatus}
            onChange={handleChange}
          ></input>
        <label htmlFor="homeStatus">Select Home Status</label>
          <select name="homeStatus" id="homeStatus" onChange={handleChange} value={newApplication.homeStatus}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value="own">Own</option>
            <option value="adopt">Adopt</option>
          </select>
        </label>
        <label> Pet Name:
          <input
            type="text"
            name="ReviewApplication[peetName]"
            value={newReview.petName}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Age:
          <input
            type="text"
            name="ReviewApplication[petAge]"
            value={newReview.petAge}
            onChange={handleChange}
          ></input>
        </label>
        <label> Pet Type:
          <input
            type="text"
            name="ReviewApplication[petType]"
            value={newReview.petType}
            onChange={handleChange}
          ></input>
        </label>
        <label>Select Pet Type
          <select name="ReviewApplication[petType]"
           onChange={handleChange} value={newReview.petType}>
            <option value="default" disabled hidden>Select Pet Type</option>
            <option value="Domesticated">Domesticated</option>
            <option value="Exotic">Exotic</option>
            <option value="Mythical">Mythical</option>
          </select>
        </label>
        <label>Pet Image:
          <input
            type="text"
            name="ReviewApplication[petImage]"
            value={newReview.petImage}
            onChange={handleChange}
          ></input>
        </label>
        <label>Is this pet vaccinated?
          <select name="ReviewApplication[petType]" 
          onChange={handleChange} value={newReview.vaccinationStatus}>
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

export default AdoptionReviewForm