import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.config';

import './signin.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
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
                    <FormInput 
                        name = "email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label='Email'
                        required 
                    />
                    <FormInput 
                    name = "password" 
                    type="password" 
                    value={this.state.password} 
                    onChange = {this.handleChange}
                    label='Password'
                    required/>
                    <div>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '}Sign in With Google{' '}</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;