import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';
import { TodoService } from '../../services/todo.service';
import { useService } from '../../hooks/useService';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: '350px',
    margin: 'auto',
    maxWidth: '14%',
    align: "center",

  },
  tableRow: {
    textAlign: "center",
    border: '3px solid',
    width: '100%',
    
  },
  tableRow2: {
    textAlign: "center",
    width: '100%',
    
  },
  input: {
    width: '20%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    textAlign: 'center',
    itemAlign: 'center',
  },
 
  tableCell:{
    textAlign: "center",
    align: 'center',
    border: '1px solid',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: '1px solid',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '12px',
},
  div:{
    textAlign: 'center',
  }

});


const SearchMovie = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');
  const history = useHistory();
  const redirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>;
  const todoService = useService(TodoService);

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
    <div>
      <NavPanel/>
      <div className={classes.div}>
      <input className={classes.input}
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
      />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableBody>
            {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <TableRow className={classes.tableRow} key={movie.id} >
                <div className={classes.div}><h1>{movie.title}</h1> </div>
                <div className={classes.div}><h2>{movie.year}</h2> </div>
                  
                  <img src={movie.poster} onClick={() => history.push('/moviedescription/'+movie.id+'/'+movie.title)}
                       alt={movie.title}/>
                  <button className={classes.button} onClick={() =>todoService.setNewTodo({ done: false, title: movie.title, poster: movie.poster, year: movie.year, id: movie.id })}>Dodaj do ulubionych</button>
                  {/* <button className={classes.button}>{redirectTo('/moviedescription/'+movie.id+'/'+movie.title, 'Opis')}</button> */}
                 
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchMovie;
