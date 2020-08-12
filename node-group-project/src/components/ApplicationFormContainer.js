import React, { useState } from "react"

const ApplicationFormContainer = props => {
  const [newApplication, setNewApplication] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    HomeStatus: "default"
  })

  const handleChange = event => {
    setNewApplication({
      ...newApplication,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addApplication(newApplication)
    clearForm()
  }

  const clearForm = () => {
    setNewApplication({
      Name: "",
      PhoneNumber: "",
      Email: "",
      HomeStatus: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-application-form callout">
      <h2>Adoption Application</h2>
      <div>
        <label>Name:
          <input
            type="text"
            name="name"
            value={newApplication.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>Phone Number:
          <input
            type="text"
            name="title"
            value={newApplication.title}
            onChange={handleChange}
       ></input>
        </label>
        <label>Email:
          <input
            type="text"
            name="title"
            value={newApplication.title}
            onChange={handleChange}
          ></input>
        </label>
        <label>Home Status:
          <input
            type="text"
            name="title"
            value={newApplication.title}
            onChange={handleChange}
          ></input>
        <label htmlFor="homeStatus">Select Home Status</label>
          <select name="homeStatus" id="homeStatus" onChange={handleChange} value={newApplication.homeStatus}>
            <option value="default" disabled hidden>Select Home Status</option>
            <option value="own">Own</option>
            <option value="adopt">Adopt</option>
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