import { Button, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SignInOutButton from '../components/SignInOutButton';
import api from '../lib/Store';
import theme from '../lib/theme';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

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
        {user ? (
          <>
            <h1>logged in</h1>
          </>
        ) : (
          <>
            <h1>not logged in</h1>{' '}
          </>
        )}
        <SignInOutButton />
      </Container>
    </ThemeProvider>
  );
}
