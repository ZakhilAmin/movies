import React, { Component } from 'react';

const Select = ({name, options, error, label, value, onChange}) => {
   // console.log(options)
    return ( 
    <div className="form-group">
        <label htmlFor={name} >{label}</label>
        <select name={name} id={name} value={value} onChange={onChange} className="form-control">
            <option value="" />
                {options.map(option =>  <option key={option._id} value={option._id}>{option.name}</option>)};
            
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
    </div> 
   
     );
}
 
export default Select;