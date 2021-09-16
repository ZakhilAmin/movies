import React from 'react';
import { getMovies } from './../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

import { Paginate } from './../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';




class Movies extends React.Component {

     state = {
        movies : [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        selectedGenres:null
        
     }

     componentDidMount(){
         const genres =[{name:'All Genres'},...getGenres()]
         this.setState({movies: getMovies(), genres})
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
     handlePagechange = page =>{
         this.setState({currentPage: page})
     }
     handleGenreSelect =(genre)=>{
         this.setState({selectedGenres: genre, currentPage:1})
     }
    render() { 
        const {length:count } = this.state.movies;
        const {pageSize, currentPage, movies: allMovies, selectedGenres } = this.state

        const filtered = selectedGenres && selectedGenres._id ? allMovies.filter(m=>m.genre._id === selectedGenres._id): allMovies;
        const movies = Paginate(filtered, currentPage, pageSize);


        if(count === 0) 
            return <p> There is no movie in the list</p>

        return (
        <div className="row">
            <div className="col-3">
                <ListGroup 
                items ={this.state.genres} 
                onItemSelect={this.handleGenreSelect}
                selectedItem={selectedGenres}
                />
            </div>
            <div className="col">
            <p>Showing {filtered.length} movies</p>
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
                            {movies.map(movie=>
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
                    <Pagination 
                    pageSize={pageSize} 
                    itemsCount={filtered.length} 
                    currentPage ={currentPage}
                    onPageChange={this.handlePagechange} />
            </div>
        </div>
      
        )
        
    }
}
 
export default Movies;