import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import PetTypeIndexContainer from "./PetTypeIndexContainer"

const NavBar = props => {
    return (
        <div className="row column">
            <div className="content">
                <h1 className="page-title">Dances with Pets</h1>
            </div>
            <div className="navbar">
                <Link to="/pets">All Pet Types</Link>
            </div>
            <Switch>
                <Route exact path="/pets" component={PetTypeIndexContainer} />
            </Switch>
        </div>
    )
}
export default NavBar