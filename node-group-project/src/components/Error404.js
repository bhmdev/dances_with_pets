import React from "react"

const Error404 = props => {
  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>Uh oh!</h1>
        <p><strong>Error 404</strong>: {props.error}</p>
        <img src="/img/404/tenor-error-gif-8925016.gif" alt="cute blue cat gets angry and rage quits when page fails to load" className="error-gif"/>
      </div>
    </div>
  )
}

export default Error404