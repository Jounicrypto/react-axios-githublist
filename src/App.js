import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users:[],
      data:[],
      login:"",
      avatar_id:"",
      repos_url:"",
      avatar_url:"",
      url:"",
      html_url:""
      
    }
  }

componentDidMount = () =>{
    axios.get("https://api.github.com/users")
    .then(res =>{
      // console.log(res)
      this.setState({
        users : res.data,
        login : res.data
      })
    }).catch(err =>{
      console.log(err)
    })
  }

  render(){
    console.log(this.state.users)
  return (
    <div className="App">
      <h1>List of Github Users</h1>
      <ul>
      {this.state.users.map((value, index)=>{
        return(
          <div key={value.id}>
            <li>{value.users}</li>
            <li>{value.login}</li>
            <li>{value.repos_url}</li>
            <img src={value.repos_url}></img>
            <li>{value.avatar_url}</li>
            <li>{value.avatar_id}</li>
            <li>{value.html_url}</li>
            

          </div>
        )
      })}
      </ul>
    </div>
  );
}
}

export default App;
