import React, { Component } from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
    const {movies, onDelete, onLike, onSort} = props
    return (  
    <table className="table">
    <thead className="thead-dark">
        <tr>
        <th onClick={()=>onSort('title')} scope="col">Title</th>
        <th onClick={()=>onSort('genre.name')} scope="col">Genre</th>
        <th onClick={()=>onSort('numberInStock')} scope="col">Stock</th>
        <th onClick={()=>onSort('dailyRentalRate')} scope="col">Rate</th>
        <th >Movie Like</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {movies.map(movie=>
            <tr key={movie._id}>     
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
                <Like liked={movie.liked} Id={movie._id} onLike={()=> onLike(movie)}/>
            </td>
            <td><button onClick={()=>onDelete(movie)} className="btn btn-danger sm-2">Delete</button></td>
            </tr>
        )}
        
    </tbody>
</table> );
}
 
export default MoviesTable;