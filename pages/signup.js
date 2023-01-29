import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SignUpForm from '../components/Forms/SignUpForm';
import Navbar from '../components/Navbar/Navbar';
import api, { supabase } from '../lib/Store';

export default function SignUp() {
  const router = useRouter();
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
      if (user) router.push('/');
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Container>
        <SignUpForm />
      </Container>
    </>
  );
}
