import { useState } from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </Container>
    </>
  );
}; 