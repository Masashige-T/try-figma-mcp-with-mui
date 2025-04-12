import { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Stack } from '@mui/material';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
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
      <Container maxWidth={false} sx={{ py: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        <Stack spacing={3} sx={{ width: '100%' }}>
          <TodoForm onAddTodo={handleAddTodo} />
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              onComplete={() => handleCompleteTodo(todo.id)}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}; 