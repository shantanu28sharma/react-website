import React from 'react';

import './signin.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }


    render(){
        return(
            <div className = 'sign-in'>
                <h2>Already have an account</h2>
                <span>Sign In</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name = "email" 
                    type="email" 
                    value={this.state.email} 
                    onChange = {this.handleChange}
                    required />
                    <label>Email</label>
                    <input 
                    name = "password" 
                    type="password" 
                    value={this.state.email} 
                    onChange = {this.handleChange}
                    required></input>
                    <label>Password</label>

                    <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}
export default SignIn;