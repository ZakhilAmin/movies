import React, { Component } from 'react';
import Like from './common/like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';


class MoviesTable extends React.Component {

  columns =[
      {path:'title', label:'Title'},
      {path:'genre.name', label:'Genre'},
      {path:'numberInStock', label:'Stock'},
      {path:'dailyRentalRate', label:'Rate'},
      {key:'Like', content: movie=> <Like liked={movie.liked} Id={movie._id} onLike={()=> this.props.onLike(movie)}/>},
      {key:'Delete', content: movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger sm-2">Delete</button>}
  ]

  
    render() { 
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props
        return (  
        <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort }/>
        <TableBody data={movies} columns={this.columns}/>
        
    </table> );;
    }
}
 
export default MoviesTable;