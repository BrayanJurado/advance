import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h5' sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                Management system ProyecTask 
                            </Link>
                        </Typography>
                        <Button
                            variant='contained'
                            color='primary'
                            endIcon={<AddIcon style={{ color: 'white' }} />}
                            onClick={() => navigate('/projects/new')}
                        >
                            New Project
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
