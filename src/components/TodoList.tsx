import { Box, Button, Typography } from '@mui/material';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onComplete, onDelete }: TodoListProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {todos.map((todo) => (
        <Box
          key={todo.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.secondary' : 'text.primary',
            }}
          >
            {todo.text}
          </Typography>
          {!todo.completed && (
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => onComplete(todo.id)}
            >
              完了
            </Button>
          )}
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onDelete(todo.id)}
          >
            削除
          </Button>
        </Box>
      ))}
    </Box>
  );
}; 