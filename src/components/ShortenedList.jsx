import React, { useEffect, useState } from 'react';
import { Paper, Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ShortenedList({ refresh }) {
  const [shortened, setShortened] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    setShortened(saved);
  }, [refresh]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <Paper sx={{ padding: 3, marginTop: 3, backgroundColor: 'background.paper' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#99BC85' }}>
        Shortened URLs
      </Typography>

      {shortened.length > 0 ? (
        <Grid container spacing={2}>
          {shortened.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#E4EFE7' }}>
                <CardContent>
                  <Typography variant="subtitle2" noWrap>
                    Original:
                  </Typography>
                  <Typography variant="body2" gutterBottom noWrap>
                    {item.url}
                  </Typography>
                  <Typography variant="subtitle2">Shortened:</Typography>
                  <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                    http://localhost:3000/{item.shortcode}
                    <IconButton onClick={() => copyToClipboard(`http://localhost:3000/${item.shortcode}`)} size="small">
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Typography>
                  <Typography variant="caption">
                    Expiry: {item.expiry || 'N/A'} mins
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No shortened URLs yet.</Typography>
      )}
    </Paper>
  );
}
