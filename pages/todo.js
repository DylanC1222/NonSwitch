import { Button, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../lib/Store';
import { supabase } from '../lib/Store';
import theme from '../lib/theme';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [re, setRe] = useState(0);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case 'SIGNED_IN':
            setUser(session?.user);
            break;
          case 'SIGNED_OUT':
            console.log('signed out');
            setUser(null);
            break;
          default:
        }
      }
    );
    return () => {
      subscription?.subscription.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button
          onClick={() => {
            setRe(re + 10);
          }}
        >
          {re}
        </Button>
        <Button
          onClick={() => {
            router.push('/');
          }}
        >
          Go home
        </Button>
        <Button
          onClick={() => {
            console.log(user);
          }}
        >
          Info about user
        </Button>
        {user ? (
          <>
            <h1>User logged in</h1>
            <Button onClick={api.signOut}>Logout</Button>{' '}
          </>
        ) : (
          <>
            <h1>User not logged in</h1>
            <Button onClick={api.signInOAuth}>Login with Google</Button>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}
