import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from './../services/fakeMovieService';
import { getGenres } from './../services/fakeGenreService';

class MoviesForm extends Form {
    state={
        data:{
            //  _id:"",
            title:"",
            genreId:"",
            numberInStock:"",
            dailyRentalRate:""
        },
        genres:[],
        errors:{}

    }
    schema={
        _id:Joi.string(),
        title:Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate'),
    }
    componentDidMount(){
        const genres = getGenres();
        this.setState({genres});
       //console.log(genres)

        const movieId = this.props.match.params.id;
        if(movieId === "new") return;
        

        const movie = getMovie(movieId);
        console.log(movie)
        if(!movie) return this.props.history.replace('/not-found');

        this.setState({ data: this.mapToViewModel(movie)})
        
    }
    mapToViewModel(movie){
        return {
           _id: movie._id,
            title:movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate
        };
    }
    doSubmit=()=>{
        saveMovie(this.state.data);

        this.props.history.push('/movies')
    }
    render() { 
        return (<div>
            <h1>Movie Form</h1>
            <form onSubmit={this.onHandleSubmit} >
                {this.renderInput("title","Title")}
                {this.renderSelect("genreId", "Genre", this.state.genres)}
                {this.renderInput("numberInStock","Number In Stock","number")}
                {this.renderInput("dailyRentalRate","Daily Rental Rate")}
                {this.renderButton("Save")}
            </form>
        </div>);
    }
}
 

// const MoviesForm = ({match, history}) => {
//     return (<div>
//  <h1>Movies Form selected movies ID-{match.params.id}</h1> 
//  <button className="btn btn-primary" onClick={()=>history.replace('/movies')}>Save</button>
//     </div> 
//     );
//}
 
export default MoviesForm;