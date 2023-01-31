import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import api from '../../lib/Store';
import { Container } from '@mui/material';

export default function TodoCreate({ user }) {
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!name) {
      setError(true);
      setHelperText('Name cannot be empty');
    } else {
      const insertData = await api.createTodo({
        user_id: user.id,
        name,
        description,
      });
      setName('');
      setDescription('');
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
    setError(false);
    setHelperText('');
  }

  function handleDescChange(e) {
    setDescription(e.target.value);
  }

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
          Create Todo
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Todo Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleNameChange}
            helperText={helperText}
            error={error}
          />
          <TextField
            margin="normal"
            fullWidth
            name="description"
            label="Description"
            type="description"
            id="description"
            autoComplete="description"
            value={description}
            onChange={handleDescChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
