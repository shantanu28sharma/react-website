import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-out.style.scss'

const SignInOut = () => (
    <div className='sign-in-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInOut;