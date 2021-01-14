import React, { Component } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

export default class UserProfile extends Component {
    state = {
        user: {},
        followers: [],
    };

    componentDidMount() {
        
        axios
        .get("https://api.github.com/users/claudiudts")
        .then((res) => {
            this.setState({ user: res.data }) 
        })
        .catch(err => console.log(err)
        )};

        
    render() {
        return <div>
            <UserDetails user={this.state.user} />
        </div>
    }

    
}