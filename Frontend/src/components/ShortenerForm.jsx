import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { logEvent } from '../services/logger';

export default function ShortenerForm({ onRefresh }) {
  const [urls, setUrls] = useState([{ url: '', expiry: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addUrlInput = () => {
    if (urls.length < 5) {
      setUrls([...urls, { url: '', expiry: '', shortcode: '' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUrls = urls.map((item) => {
      const code = item.shortcode || Math.random().toString(36).substring(2, 7);
      return { ...item, shortcode: code };
    });

    const existing = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    localStorage.setItem('shortenedUrls', JSON.stringify([...existing, ...updatedUrls]));

    logEvent('Shortened URLs saved', updatedUrls);
    alert('URLs shortened and saved!');

    setUrls([{ url: '', expiry: '', shortcode: '' }]);
    onRefresh();
  };

  return (
    <Paper sx={{ padding: 3, marginTop: 3, backgroundColor: 'background.paper' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {urls.map((input, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={4}>
                <TextField
                  label="Long URL"
                  fullWidth
                  required
                  value={input.url}
                  onChange={(e) => handleChange(index, 'url', e.target.value)}
                  sx={{ backgroundColor: '#E4EFE7', borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Expiry (minutes)"
                  fullWidth
                  value={input.expiry}
                  onChange={(e) => handleChange(index, 'expiry', e.target.value)}
                  sx={{ backgroundColor: '#E4EFE7', borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Custom Shortcode"
                  fullWidth
                  value={input.shortcode}
                  onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
                  sx={{ backgroundColor: '#E4EFE7', borderRadius: 1 }}
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <Button variant="outlined" onClick={addUrlInput} disabled={urls.length >= 5} sx={{
    backgroundColor: '#ccc', // likely light
    color: '#666',           // likely light grey text
  }}>
              Add another URL
            </Button>{' '}
            <Button type="submit" variant="contained" color="primary">
              Shorten URLs
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
