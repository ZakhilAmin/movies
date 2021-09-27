import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class Register extends Form {
    state ={
        data:{email:"", password:"", username:""},
        errors:{}
    }
    schema ={
        email: Joi.string().email().label('Email'),
        username: Joi.string().min(5).max(10).required().label('Username'),
        password: Joi.string().min(3).required().label('Password')
    }
    doSubmit=()=>{
        console.log('Submitted!')
       }
    render() { 
        return <div>
            <h1>Register Form</h1>
            <form onSubmit={this.onHandleSubmit}>
                {this.renderInput('email','Email')}
                {this.renderInput('username', 'Username')}
                {this.renderInput('password','Password','password')}
                {this.renderButton("Register")}
            </form>
        </div>;
    }
}
 
export default Register;