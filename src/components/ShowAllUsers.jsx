import React from 'react'

function ShowAllUsers(props) {
  return (
    <div>
      {props.state.users.map((value, index)=>{
        return(
          <div key={value.id}>
            <li>{value.users}</li>
            <li>{value.login}</li>
            <li>{value.repos_url}</li>
            <img src={value.avatar_url}></img>
            <li>{value.repos_url}</li>
            <li>{value.avatar_id}</li>
            <li>{value.html_url}</li>
            

          </div>
        )
      })}
    </div>
  )
}

export default ShowAllUsers