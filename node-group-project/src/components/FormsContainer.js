import React, { useState } from "react"
import Error404 from "./Error404"
import FormSuccess from "./FormSuccess"
import AdoptionForm from "./AdoptionForm"
import SurrenderForm from "./SurrenderForm"
import AdoptionReviewForm from "./AdoptionForm"
import SurrenderReviewForm from "./AdoptionForm"

const FormsContainer = props => {
  const [formSuccessMessage, setFormSuccessMessage] = useState([]);

  const handleFormSubmission = payload => {
    let fetchString;
    if (props.form === "adoption") { fetchString = '/api/v1/adoption-application'; }
    else if (props.form === "adoption-review") { fetchString = '/api/v1/adoption-application-review'; }
    else if (props.form === "surrender") { fetchString = '/api/v1/surrender-application'; }
    else if (props.form === "surrender-review") { fetchString = '/api/v1/surrender-application-review'; }
    fetch(fetchString, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(body => {
        if (props.form === "adoption") { setFormSuccessMessage('Your adoption application has been successfully submitted.'); }
        else if (props.form === "adoption-review") { setFormSuccessMessage('Your adoption review has been successfully submitted.'); }
        else if (props.form === "surrender") { setFormSuccessMessage('Your surrender application has been successfully submitted.'); }
        else if (props.form === "surrender-review") { setFormSuccessMessage('Your surrender review has been successfully submitted.'); }
      })
      .then(body => {
      })
      .catch(error => {
        console.error(`Error in fetch: ${error.message}`)
      });
  }

  if (!Array.isArray(formSuccessMessage)) {
    return <FormSuccess formSuccessMessage={formSuccessMessage}/>
  }
  else if (props.form === "adoption") { return <AdoptionForm handleFormSubmission={handleFormSubmission} /> }
  else if (props.form === "surrender") { return <SurrenderForm handleFormSubmission={handleFormSubmission}/> }
  else if (props.form === "adoption-review") { return <AdoptionReviewForm handleFormSubmission={handleFormSubmission}/> }
  else if (props.form === "surrender-review") { return <SurrenderReviewForm handleFormSubmission={handleFormSubmission}/> }
  else { return <Error404 error={`Sorry, but that form doesn't exist!`} /> }
}

export default FormsContainer