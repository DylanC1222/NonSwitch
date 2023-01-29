import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInOutButton from '../AuthButtons/SignInOutButton';
import { Container } from '@mui/material';

export default function Navbar({ user }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <SignInOutButton user={user} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
