import React from "react"
import {Link} from "react-router-dom"

let Mainpage = ()=>{

    return(
        <div>
            <h1>Welcome to my React world!!! feel free to ask me anything</h1>
            <h3>I am coming now okay</h3><br/><br/>
            <Link to="/users">Show list of users</Link>
        </div>
    )
}
export default Mainpage;