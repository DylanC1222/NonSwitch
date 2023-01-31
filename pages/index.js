import { Box, Button, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoList from '../components/Todo/TodoList';
import api, { supabase } from '../lib/Store';

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [welcome, setWelcome] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_OUT') {
          setUser(null);
        } else if (event == 'SIGNED_IN') {
          setUser(session?.user);
        }
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setWelcome('Welcome');
      }, 200);
      const user = await api.getUser();
      setUser(user);
      if (user) {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Container>
        {' '}
        {user ? (
          <>
            <TodoCreate user={user} />
          </>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            {loading ? <CircularProgress /> : <h1>{welcome}</h1>}
          </Box>
        )}
      </Container>
    </>
  );
}
