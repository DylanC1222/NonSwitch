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
      <Container></Container>
    </ThemeProvider>
  );
}
