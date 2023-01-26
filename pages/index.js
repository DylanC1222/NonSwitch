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
    const fetchUser = async () => {
      const user = await api.getUser();
      setUser(user);
    };
    fetchUser();
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
            router.push('/todo');
          }}
        >
          Go to todo
        </Button>
        <Button
          onClick={() => {
            console.log(user);
          }}
        >
          Info about user
        </Button>
        <Button
          onClick={async () => {
            const {
              data: { user },
            } = await supabase.auth.getUser();
            console.log(user);
          }}
        >
          Get user
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
