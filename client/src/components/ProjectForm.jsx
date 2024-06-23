import React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography, Box } from '@mui/material';

export default function ProjectForm() {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }} style={{ backgroundColor: '#1e272e', padding: '1rem' }}>
          <Typography variant='h6' color='white'>Create Project</Typography>
          <CardContent>
            <form>
              <TextField
                variant='filled'
                label='Project description'
                multiline
                rows={4}
                fullWidth
                sx={{ display: 'block', margin: '.5rem 0' }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <TextField
                variant='filled'
                label='Culmination Date'
                type='date'
                fullWidth
                sx={{ display: 'block', margin: '.5rem 0' }}
                InputLabelProps={{ style: { color: "gray" }, shrink: true }}
                inputProps={{ style: { color: "white" } }}
              />
              <Grid container justifyContent="space-between" spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Button variant='contained' color='primary' type='submit' fullWidth>
                    Save
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant='contained' color='secondary' type='button' style={{ backgroundColor: 'red' }} fullWidth>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
