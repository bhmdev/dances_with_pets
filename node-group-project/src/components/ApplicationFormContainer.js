import React, { useState } from "react"
// import ErrorList from "./ErrorList"

const ApplicationFormContainer = props => {
  const emptyApplication = {
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    petId: ""
  };

  let [newApplication, setNewApplication] = useState(emptyApplication)

  const handleChange = event => {
    setNewApplication({
      ...newApplication,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    // alert("form submitted! :)")
    console.log("form submitted! :)")
    // event.preventDefault()
    // props.addApplication(newApplication)
    // clearForm()
  }

  const clearForm = () => {
    console.log("form cleared! :)")
    setNewApplication(emptyApplication)
  }

  return (
    <form action="/adopt" method="POST" onSubmit={handleSubmit} className="new-application-form callout">
      {/* <ErrorList errors={errors} /> */}
      <h2>Adoption Application</h2>
      <div>
        <label>Name:
          <input
            type="text"
            name="application[name]"
            value={newApplication.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>Phone Number:
          <input
            type="text"
            name="application[phone_number]"
            value={newApplication.phoneNumber}
            onChange={handleChange}
       ></input>
        </label>
        <label>Email:
          <input
            type="text"
            name="application[email]"
            value={newApplication.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>Select Home Status
          <select name="application[home_status]" onChange={handleChange} value={newApplication.homeStatus}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value="rent">Rent</option>
            <option value="own">Own</option>
          </select>
        </label>
        <label>Select Pet
          <select name="application[pet_id]" onChange={handleChange} value={newApplication.petId}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value={newApplication.petId}>Shadow</option>
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

export default ApplicationFormContainer