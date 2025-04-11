import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Grid,
} from '@mui/material';

interface BlogPost {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
}

const Example: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      author: 'John Doe',
      date: '4 Feb 2022',
      title: 'New feature available on Devias',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      tags: ['Security', 'Back-end'],
    },
    {
      id: 2,
      author: 'John Doe',
      date: '4 Feb 2022',
      title: 'New feature available on Devias',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      tags: ['Security', 'Back-end'],
    },
    {
      id: 3,
      author: 'John Doe',
      date: '4 Feb 2022',
      title: 'New feature available on Devias',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      tags: ['Security', 'Back-end'],
    },
  ];

  return (
    <Box sx={{ p: 10 }}>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <Box
                sx={{
                  height: 140,
                  backgroundColor: 'rgba(0, 0, 0, 0.56)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" color="white">
                  Image Placeholder
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="primary" gutterBottom>
                  {post.author} • {post.date}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Example; 