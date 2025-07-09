import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ShortenerForm from '../components/ShortenerForm';
import ShortenedList from '../components/ShortenedList';

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#99BC85' }}>
        React URL Shortener
      </Typography>
      <ShortenerForm onRefresh={triggerRefresh} />
      <ShortenedList refresh={refresh} />
    </Container>
  );
}
