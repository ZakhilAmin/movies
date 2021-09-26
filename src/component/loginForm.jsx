import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser'

class LoginForm extends React.Component {
 state ={
     account:{username:"", password:""},
     errors:{}
 }
 schema ={
     username: Joi.string().required().label('Username'),
     password: Joi.string().required().label('Password')
 }
 handlChanged =({currentTarget: input})=>{
     const errors = {...this.state.errors}
     const errorMessage = this.validateProperty(input)

     if(errorMessage) errors[input.name] = errorMessage
     else delete errors[input.name];

    const account ={...this.state.account};
    account[input.name] = input.value;
    this.setState({account, errors})
 }
  validate = () =>{
    const {error} = Joi.validate(this.state.account, this.schema, {abortEarly: false});
   // console.log(result)

    if(!error) return null;

    const errors ={};

    for(let item of error.details){
        errors[item.path[0]] = item.message;
        return errors;
    }
       
     
  }
    onHandleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();
        //console.log(errors)
        this.setState({errors: errors || {}})
        if(errors) return; 
        console.log('Submitted!')
    }

    validateProperty =({name, value})=>{
        const obj= { [name]: value};
        const schema =  {[name]:this.schema[name]};
       const { error }= Joi.validate(obj, schema);
       return error ? error.details[0].message : null
    //    if( error ) return null;
    //    return error.details[0].message;
    }
    render() { 
        const {account, errors} = this.state;
        return (
        <div >
            <h1>Login </h1>
            <form onSubmit={this.onHandleSubmit}>
                <Input value={account.username} errors={errors.username} autoFocus onChange={this.handlChanged} id="username" type="text" label="User" name="username" />
                <Input value={account.password}  errors={errors.password} onChange={this.handlChanged} type="text" id="password" label="Password" name="password" />
                
                <button disabled ={this.validate()} className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}
 
export default LoginForm;