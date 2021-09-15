import React from 'react';
import { getMovies } from './../services/fakeMovieService';
import Like from './common/like';


class Movies extends React.Component {

     state = {
        movies : getMovies()
     }

     handleDelete = (movie)=>{
         const movies = this.state.movies.filter(m=>m._id !== movie._id);
         this.setState({movies})
     }
     onHandleLike = (movie) =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
       
        movies[index]={...movies[index]};
        console.log(movies[index])
        movies[index].liked =!movies[index].liked;
        this.setState({movies})
     }
    render() { 
        const {length:count } = this.state.movies;

        if(count === 0) 
            return <p> There is no movie in the list</p>

        return <div>
            <p>Showing {count} movies</p>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Gemre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th>Movie Like</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie=>
                                <tr key={movie._id}>     
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked} Id={movie._id} onLike={()=> this.onHandleLike(movie)}/>
                                </td>
                                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger sm-2">Delete</button></td>
                                </tr>
                            )}
                            
                        </tbody>
                    </table>
        </div>;
    }
}
 
export default Movies;