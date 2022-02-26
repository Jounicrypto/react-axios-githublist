import React from 'react';
import axios from 'axios';
import './App.css';
import ShowAllUsers from './components/ShowAllUsers';

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
      <ShowAllUsers users={this.state.users}/>
      </ul>
    </div>
  );
}
}

export default App;
