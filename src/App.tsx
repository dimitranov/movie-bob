import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Home from './views/Home';
import Header from './views/Header';
import Login from './views/Login';
import Registration from './views/Registration';

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path={"/movie-bob/"}>
          <br />
          <Header />
          <Home />
        </Route>
        <Route exact path={"/movie-bob/movie/:id"}>
          <br />
          <Header />
          <p>MOVIE</p>
        </Route>

        <Route exact path={"/movie-bob/movies/:type"}>
          <br />
          <Header />
          <p>about</p>
        </Route>

        <Route exact path={"/movie-bob/tv-show/:id"}>
          <br />
          <Header />
          <p>MOVIE</p>
        </Route>

        <Route exact path={"/movie-bob/tv-show/:type"}>
          <br />
          <Header />
          <p>about</p>
        </Route>
        <Route exact path={"/movie-bob/login"}>
          <br />
          <Login />
        </Route>
        <Route exact path={"/movie-bob/registration"}>
          <br />
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


/*
Genres
Trending movies
Search by string
Discover - random movies by filters
Movies - Top Rated, Now Playing, Latest, Upcoming, Popular
*/