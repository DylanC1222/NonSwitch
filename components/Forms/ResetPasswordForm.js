import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import api from '../lib/Store';
import { supabase } from '../lib/Store';
import Copyright from '../Copyright';

export default function ResetPasswordForm() {
  React.useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('use effect auth');
      if (event == 'PASSWORD_RECOVERY') {
        const newPassword = prompt(
          'What would you like your new password to be?'
        );
        const { data, error } = api.changePassword(newPassword);

        if (data) alert('Password updated successfully!');
        if (error) alert('There was an error updating your password.');
      }
    });
  }, []);

  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     const input = new FormData(event.currentTarget);
  //     const email = input.get('email');
  //     const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  //   }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Enter your email
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
