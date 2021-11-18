import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import SignInForm from './signinForm';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                sign innn
                <SignInForm className='sign-in__form' />
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SignIn'
})(SignIn);

export default SignIn;