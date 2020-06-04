import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movie from './views/movie/Movie';
import MovieDescription from './views/moviedescription/MovieDescription';
import SearchMovie from './views/searchMovie/SearchMovie';
import Home from './views/home/Home';
import TodoPanel from './views/todoPanel/TodoPanel';
import AddedMovie from './views/addedmovies/AddedMovies';
import { Provider } from 'react-redux';
import store from './store';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/movie" component={Movie}/>
            <Route path="/search" component={SearchMovie}/>
            <Route path="/addedMovies" component={AddedMovie}/>
            <Route path="/moviedescription/:id/:title" component={MovieDescription} />
            <Route path="/todo" component={TodoPanel}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;




