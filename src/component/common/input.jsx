import React, { Component } from 'react';

const Input = ({name, value, label, errors, onChange, type}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            value={value} 
            id={name}
            name={name}
            onChange={onChange} 
            type={type} 
            className="form-control" />
            {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
     );
}
 
export default Input;