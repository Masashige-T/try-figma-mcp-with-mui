import { Stack, Typography, Button } from '@mui/material';

interface TodoItemProps {
  text: string;
  onComplete: () => void;
  onDelete: () => void;
}

export const TodoItem = ({ text, onComplete, onDelete }: TodoItemProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%', maxWidth: 1280, mx: 'auto' }}
    >
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {text}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={onComplete}
        size="small"
      >
        完了
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onDelete}
        size="small"
      >
        削除
      </Button>
    </Stack>
  );
}; 