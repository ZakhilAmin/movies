import React, { Component } from 'react';

const MoviesForm = ({match, history}) => {
    return (<div>
 <h1>Movies Form selected movies ID-{match.params.id} and movie name: {match.params.title}</h1> 
 <button className="btn btn-primary" onClick={()=>history.replace('/movies')}>Save</button>
    </div> 
    );
}
 
export default MoviesForm;