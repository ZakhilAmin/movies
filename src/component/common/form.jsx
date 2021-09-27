import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from './input';

class Form extends React.Component {
    state={
        data:{},
        errors:{}
    };
    validate = () =>{
        const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false});
       // console.log(result)
        if(!error) return null;
        const errors ={};
        for(let item of error.details){
            errors[item.path[0]] = item.message;
            return errors;
        }
    };
    validateProperty =({name, value})=>{
        const obj= { [name]: value};
        const schema =  {[name]:this.schema[name]};
        const { error }= Joi.validate(obj, schema);
        return error ? error.details[0].message : null
        //    if( error ) return null;
        //    return error.details[0].message;
        }
    onHandleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
            //console.log(errors)
        this.setState({errors: errors || {}})
        if(errors) return; 
        this.doSubmit()
        }

        handlChanged =({currentTarget: input})=>{
            const errors = {...this.state.errors}
            const errorMessage = this.validateProperty(input)
       
            if(errorMessage) errors[input.name] = errorMessage
            else delete errors[input.name];
       
           const data ={...this.state.data};
           data[input.name] = input.value;
           this.setState({data, errors})
        }
        renderButton(label){
            return <button disabled ={this.validate()} className="btn btn-primary">{label}</button>
        }
        renderInput(name,label, type='text'){
            const {data, errors} = this.state;
            return( <Input 
                value={data[name]} 
                type={type}
                errors={errors[name]} 
                autoFocus 
                onChange={this.handlChanged} 
                label={label} 
                name={name} />
                );
        }
}
 
export default Form;