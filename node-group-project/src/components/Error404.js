import React from "react"
import { Link } from "react-router-dom"
import capFirstLetter from "../functions/capFirstLetter.js"

const Error404 = props => {
  let link = "";
  if (props.linkTo) {link = (
    <p className="error-link-p">Perhaps you would like to view our <Link to={`/${props.linkTo}`} className="error-link">{capFirstLetter(props.linkTo)} page</Link>?</p>
  );};

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>Uh oh!</h1>
        <p><strong>Error 404</strong>: {props.error}</p>
        {link}
        <img src="/img/404/tenor-error-gif-8925016.gif" alt="cute blue cat gets angry and rage quits when page fails to load" className="error-gif"/>
      </div>
    </div>
  )
}

export default Error404