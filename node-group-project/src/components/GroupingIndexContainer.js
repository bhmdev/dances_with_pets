import React, { useState, useEffect } from "react"
import Error404 from "./Error404"
import GroupingTile from "./GroupingTile"
import getPath from "../functions/getPath.js"

const GroupingIndexContainer = props => {
  const [grouping, setGrouping] = useState([]);

  const path = getPath();
  let targetGroup;
  if (path.length > 1) { targetGroup = props.match.params.type.substring(0,path[1].length-1); }
  else { targetGroup = path[0] }
  const found = ['grouping', 'classification', 'type', 'breed'].includes(targetGroup);

  useEffect(() => {
    if (found) {
      const fetchString = `/api/v1/${targetGroup === 'grouping' ? 'grouping' : `grouping/${targetGroup}`}`;
      fetch(fetchString)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(content => {
        setGrouping(content.petGrouping)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }, [targetGroup])

  const groupingTiles = grouping.map(group => {
    return (
      <GroupingTile
        key={group.id}
        grouping={targetGroup}
        group={group[targetGroup]}
      />
    )
  })

  if (!found) { return <Error404 error={`Sorry, but that grouping of pets doesn't exist at our shelter. Our groupings are: classification, type, & breed.`} linkTo={`grouping`} /> } 
  else {
    return (
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1 className="center-text">View our pet {props.match.params.type}!</h1>
          <hr />
          {groupingTiles}
        </div>
      </div>
    )
  }
}

export default GroupingIndexContainer;