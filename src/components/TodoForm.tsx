import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
} from '@mui/material';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <Card>
      <CardHeader title="新規TODOを作成する" />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <TextField
            fullWidth
            label="todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant="standard"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary">
            作成
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}; 