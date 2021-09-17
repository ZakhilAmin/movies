import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';


class MoviesTable extends React.Component {

  columns =[
      {path:'title', label:'Title'},
      {path:'genre.name', label:'Genre'},
      {path:'numberInStock', label:'Stock'},
      {path:'dailyRentalRate', label:'Rate'},
      {key:'Like'},
      {key:'Delete'}
  ]

  
    render() { 
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props
        return (  
        <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort }/>
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
    </table> );;
    }
}
 
export default MoviesTable;