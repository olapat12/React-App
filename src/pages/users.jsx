import React from "react"

let User = ()=>{

    const myusers = ["ayomide","Dimeji","Wale","Dayo","Temi"]

    return(
        <div>
            <h1>
              <ul>
                {myusers.map((prop, index)=>{
                    return(
                    <li key={index}>{prop}</li>
                    )
                })}
              </ul>
            </h1>
        </div>
    )
}
export default User;