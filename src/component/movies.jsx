import React from 'react';
import { getMovies } from './../services/fakeMovieService';
import { Link } from 'react-router-dom';
import Pagination from './common/pagination';

import { Paginate } from './../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';




class Movies extends React.Component {

     state = {
        movies : [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        selectedGenres:null,
        sortColumn: {path: 'title', order: 'asc'}
        
     }

     componentDidMount(){
         const genres =[{_id: '',name:'All Genres'},...getGenres()]
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

     handleSort = sortColumn =>{ 
         this.setState({sortColumn})
         //this.setState({sortColumn:{path:path, order:'asc'}});
     }

     getPagedData = () =>{
        const {pageSize, currentPage, movies: allMovies, selectedGenres, sortColumn } = this.state;
        
        const filtered = selectedGenres && selectedGenres._id ? allMovies.filter(m=>m.genre._id === selectedGenres._id): allMovies;
        
        const sorted =_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies = Paginate(sorted, currentPage, pageSize);



        return {totalCount: filtered.length, data: movies}
     }
     onNewMovie = () =>{
        console.log("Added New movie")
     }
    render() { 
        const {length:count } = this.state.movies;
        const {pageSize, currentPage,  selectedGenres, sortColumn } = this.state

        
        if(count === 0) 
            return <p> There is no movie in the list</p>

        const {totalCount, data: movies} = this.getPagedData();

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
            <p>Showing {totalCount} movies</p>
            <Link className="btn btn-primary" style={{marginBottom: "20px"}} to="/movies/new">
                New Movies
            </Link>
                   <MoviesTable 
                   movies={movies} 
                   sortColumn = {sortColumn}
                   onLike={this.onHandleLike} 
                   onSort={this.handleSort}
                   onDelete={this.handleDelete}
                   />
                    <Pagination 
                    pageSize={pageSize} 
                    itemsCount={totalCount} 
                    currentPage ={currentPage}
                    onPageChange={this.handlePagechange} />
            </div>
        </div>
      
        )
        
    }
}
 
export default Movies;