import React, { Component } from 'react';
import axios from 'axios';
import Repose from './Repos'

export default class ShowAllUsers extends Component {
    constructor(props){
    super(props);

    this.state ={
        alllists :[],
    
    }
}

componentDidMount = () =>{
axios.get('http://api.github.com/users/Jounicrypto?client_id=930dc05feec17fe2f949&client_secret=f62922f19b8a781e34009cc91223c12f0f89b164=create')
.then(result => (this.setState({alllists:result.data})))
.catch(err => console.log(err))
}




render() {
    // console.log(this.state.alllists);

return (

    <div>   
        <div>
        <img src={this.state.alllists.avatar_url} alt="" />
        <div>
        <p><strong>UserName:</strong> {this.state.alllists.login}</p>
        <p><strong>FullName:</strong> {this.state.alllists.name}</p>
        <p><strong>Email Adress:</strong> {this.state.alllists.email}</p>
        <p><strong>Location:</strong> {this.state.alllists.location}</p>
        
        </div>
    </div>
        <h2>User Repository</h2>
            <Repose/>
    </div>
)
}
}