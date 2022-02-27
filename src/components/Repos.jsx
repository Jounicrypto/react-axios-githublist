import React, { Component } from 'react'
import axios from 'axios';

export default class Repos extends Component {
    constructor(props){
        super(props);
    
        this.state ={
            repos:[]
        }
    }

    componentDidMount = () =>{
    axios.get('https://api.github.com/users/Jounicrypto/repos')
    .then(res => this.setState({repos:res.data}))
    .catch(err => console.log(err))
    }
    



    render() {
    return (
        <div>
            {this.state.repos && this.state.repos.map((repo,index) => {


                return(

                    <div key={repo.index} className="repos">

                        <a href={repo.html_url}>{repo.name}</a>

                    </div>

                    )

})}
            </div>
    )
}
}