import React, { useState } from "react"

const SurrenderForm = props => {
  const emptyApplication = {
    name: "", 
    phone_number: "", 
    email: "", 
    pet_name: "", 
    pet_type_id: "default", 
    pet_img_url: "", 
    vaccination_status: "default", 
    description: "",
    adoption_story: "", 
    pet_age_years: "", 
    pet_age_months: ""
  };

  const [newApplication, setNewApplication] = useState(emptyApplication)

  const handleInputChange = event => {
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.handleFormSubmission(newApplication)
    setNewApplication(emptyApplication);
  }

  const clearForm = () => {
    event.preventDefault()
    setNewApplication(emptyApplication)
  }

  return (
    <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2> Surrender Application</h2>
      <div>
        <label> Name *
          <input
            type="text"
            name="name"
            placeholder="Tommy TuCats"
            value={newApplication.name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label> Phone Number *
          <input
            type="text"
            name="phone_number"
            placeholder="1-800-867-5309"
            value={newApplication.phone_number}
            onChange={handleInputChange}
          ></input>
        </label>
        <label> Email *
          <input
            type="text" 
            name="email"
            placeholder="toebeans@example.com"
            value={newApplication.email}
            onChange={handleInputChange}
          ></input>
        </label>
        <label> Pet Name *
          <input
            type="text"
            name="pet_name"
            placeholder="Air Bud"
            value={newApplication.pet_name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>Select Pet Breed *
          <select name="pet_type_id" onChange={handleInputChange} value={newApplication.pet_type_id}>
            <option value="default" disabled hidden>Select Pet Type</option>
            <option value="1">domestic short hair</option>
            <option value="4">german shepherd</option>
            <option value="7">tiger</option>
            <option value="9">dragon</option>
          </select>
        </label>
        <label>Pet Image *
          <input
            type="text"
            name="pet_img_url"
            placeholder="example.com/air-bud-being-cute.jpg"
            value={newApplication.pet_img_url}
            onChange={handleInputChange}
          ></input>
        </label>
        <div className="inline-block medium-5 cell margin-right-1">
          <div className="inline-block medium-2 cell margin-right-1">
            <p className="form-super-label">How old is your pet?</p>
            <label>Years
              <input
                type="number"
                name="pet_age_years"
                min="0" max="999999999" step="1"
                placeholder="3"
                value={newApplication.pet_age_years}
                onChange={handleInputChange}
              ></input>
            </label>
          </div>
          <div className="inline-block medium-2 cell margin-right-1">
            <label>Months
              <input
                type="number"
                name="pet_age_months"
                min="0" max="11" step="1"
                placeholder="0"
                value={newApplication.pet_age_months}
                onChange={handleInputChange}
              ></input>
            </label>
          </div>
        </div>
        <div className="inline-block medium-5 cell margin-right-1">
          <div className="inline-block medium-6 cell margin-right-1">
            <label>Is this pet vaccinated?
              <select name="vaccination_status" onChange={handleInputChange} value={newApplication.vaccination_status}>
                <option value="default" disabled hidden>Select Vaccination Status</option>
                <option value="TRUE">Yes</option>
                <option value="FALSE">No</option>
              </select>
            </label>
          </div>
        </div>
        <label>Brief description of your pet
          <input
            type="text"
            name="description"
            placeholder="He's cute and loves to play ball."
            value={newApplication.description}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>What is this pet's story? *
          <textarea
            type="text"
            id="adoption-story"
            name="adoption_story"
            placeholder="Air Bud is a great doggo but I do not have a basketball court. :("
            value={newApplication.adoption_story}
            onChange={handleInputChange}
          ></textarea>
        </label>
      </div>
      <p id="require-descriptor">* denotes a required field</p>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" id="clear-button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  )
}

export default SurrenderForm
