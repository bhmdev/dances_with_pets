import React from "react"
import { Link } from "react-router-dom"
import capFirstLetter from "../functions/capFirstLetter.js"

const GroupingTile = props => {
  let group;
  if (props.group) { group = capFirstLetter(props.group); }
  
  return (
    <div className="pet-type-tile">
      <p className="center-text"><Link to={`/${props.grouping}/${props.group}`}>{group}</Link></p>
      <hr />
    </div>
  )
}

export default GroupingTile;
