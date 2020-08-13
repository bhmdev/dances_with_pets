import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PetTypeIndexContainer from "./PetTypeIndexContainer"
import GroupingIndexContainer from "./GroupingIndexContainer"
import FormsContainer from "./FormsContainer"

const NavBar = props => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><Link to="/" className="site-title">Dances with Pets</Link></li>
            <li><Link to="/adopt" className="vr-left navLink">Adopt</Link></li>
            <li><Link to="/surrender" className="navLink">Surrender</Link></li>
            <li className="vr-left">
              <div className="dropdown">
                <Link to="#" className="nav-drop">Pets</Link>
                <div className="dropdown-content">
                  <Link to="/api/v1/pets">Current Pets</Link>
                  <Link to="/api/v1/past-pets">Past Pets</Link>
                  <hr className="hr-slim" />
                  <Link to="/grouping/classifications">By Class</Link>
                  <Link to="/grouping/types">By Type</Link>
                  <Link to="/grouping/breeds">By Breed</Link>
                  <hr className="hr-slim" />
                  <Link to="/api/v1/type/cat">Cats</Link>
                  <Link to="/api/v1/type/dog">Dogs</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"></input></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetTypeIndexContainer} />
        <Route exact path="/grouping/:type" component={GroupingIndexContainer} />
        <Route exact path="/adopt" render={() => <FormsContainer form={"adoption"} />} />
        <Route exact path="/surrender" render={() => <FormsContainer form={"surrender"} />} />
        <Route exact path="/review-adoptions" render={() => <FormsContainer form={"adoption-review"} />} />
        <Route exact path="/review-surrenders" render={() => <FormsContainer form={"surrender-review"} />} />
      </Switch>
    </>
  )
}

export default NavBar