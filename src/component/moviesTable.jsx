import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';



class MoviesTable extends React.Component {

  columns =[
      {path:'title', label:'Title', content: movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
      {path:'genre.name', label:'Genre'},
      {path:'numberInStock', label:'Stock'},
      {path:'dailyRentalRate', label:'Rate'},
      {key:'Like', content: movie=> <Like liked={movie.liked} Id={movie._id} onLike={()=> this.props.onLike(movie)}/>},
      {key:'Delete', content: movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger sm-2">Delete</button>}
  ]

  
    render() { 
        const {movies, sortColumn, onSort} = this.props
        return (  
            <Table data={movies} columns={this.columns} onSort={onSort} sortColumn ={sortColumn}/>
         );;
    }
}
 
export default MoviesTable;