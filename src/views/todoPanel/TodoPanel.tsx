import React from 'react';
import { useService } from '../../hooks/useService';
import { TodoService } from '../../services/todo.service';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todos.selectors';


const TodoPanel = () => {
  const todoService = useService(TodoService);
  const todos = useSelector(todosSelector);

  React.useEffect(() => {
    todoService.setNewTodo({
      done: false,
      title: 'nowe todo',
      poster: 'opis todo',
      year: '',
      id: '1'
    });
  }, []);


  return <div>{todos.map((todo, index) => <div key={index}>{todo.title}</div>)}</div>;
};


export default TodoPanel;
