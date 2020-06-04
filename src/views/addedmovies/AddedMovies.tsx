import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { makeStyles } from '@material-ui/core/styles';
import { useService } from '../../hooks/useService';
import { TodoService } from '../../services/todo.service';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todos.selectors';

const useStyles = makeStyles({
    div: {
        width: '50%',
        border: '3px solid',
        margin: 'auto auto 60px',
        textAlign: 'center',
        backgroundColor: 'grey',
        color: 'white',
    },
    button: {
        backgroundColor: '#4CAF50',
        border: '1px solid',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '16px',
    }
});


const AddedMovies = () => {
    const classes = useStyles();
    const todoService = useService(TodoService);
    const todos = useSelector(todosSelector);
    return (
        <div >
            <NavPanel />
            {todos.map((todo, index) => <div key={index} className={classes.div}>                  
                <h1>{todo.title}</h1>
                <h1>{todo.year}</h1>
                <img src={todo.poster}
                    alt={todo.title} />
                <div>
                <button className={classes.button} onClick={() => todoService.deleteTodo({ done: false, title: todo.title, poster: todo.poster, year: todo.year, id: todo.id })}>Usun</button>
                </div>
            </div>)}
        </div>
    );
};

export default AddedMovies;