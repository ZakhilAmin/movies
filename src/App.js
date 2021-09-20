
import './App.css';
import Movies from './component/movies';
import NavBar from './component/navBar';
import NotFound from './component/notFound';
import Customers from './component/customers';
import Rentals from './component/rentals';
import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react';


function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      
      <div className="content">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component ={Customers} />
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-Found" />
        </Switch>
      </div>
      {/* <Movies /> */}
    </main>
    </React.Fragment>
  );
}

export default App;
