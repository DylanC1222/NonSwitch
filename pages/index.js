import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import SignInOutButton from '../components/AuthButtons/SignInOutButton';
import Navbar from '../components/Navbar/Navbar';
import api, { supabase } from '../lib/Store';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_OUT') {
          setUser(null);
        } else if (event == 'SIGNED_IN') {
          console.log(event);
          setUser(session?.user);
        }
      });
      const user = await api.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Container>
        {user ? (
          <>
            <h1>Todo goes here</h1>
          </>
        ) : (
          <>
            <h1>not logged in</h1>
          </>
        )}
      </Container>
    </>
  );
}
