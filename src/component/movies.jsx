import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';


class Movies extends React.Component {

     state = {
        movies : getMovies()
     }

     handleDelete = (movie)=>{
         const movies = this.state.movies.filter(m=>m._id !== movie._id);
         this.setState({movies})
     }
    render() { 
        return <div>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Gemre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th>Actiton</th>
    </tr>
  </thead>
  <tbody>
      {this.state.movies.map(movie=><tr key={movie._id}>
      
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger sm-2">Delete</button></td>
    </tr>)}
    
    </tbody>
    </table>
        </div>;
    }
}
 
export default Movies;