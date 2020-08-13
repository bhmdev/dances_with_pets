import React, { useState } from "react"

const AdoptionForm = props => {
  const emptyApplication = {
    name: "",
    phone_number: "",
    email: "",
    home_status: "default",
    pet_id: "default"
  };

  let [newApplication, setNewApplication] = useState(emptyApplication);

  const handleInputChange = event => {
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmission(newApplication);
    setNewApplication(emptyApplication)
  }

  const clearForm = () => {
    event.preventDefault();
    setNewApplication(emptyApplication)
  }

  return (
    <form onSubmit={handleSubmit} className="new-application-form callout">
      <h2>Adoption Application</h2>
      <div>
        <label>Name *
          <input
            type="text"
            name="name"
            value={newApplication.name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>Phone Number *
          <input
            type="text"
            name="phone_number"
            value={newApplication.phone_number}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>Email *
          <input
            type="text"
            name="email"
            value={newApplication.email}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>Select Home Status *
          <select name="home_status" onChange={handleInputChange} value={newApplication.home_status}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value="rent">Rent</option>
            <option value="own">Own</option>
          </select>
        </label>
        <label>Select Pet *
          <select name="pet_id" onChange={handleInputChange} value={newApplication.petId}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value={newApplication.petId}>Shadow</option>
          </select>
        </label>
      </div>
      <p id="require-descriptor">* denotes a required field</p>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default AdoptionForm