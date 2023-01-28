import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../lib/Store';

export default function SignInOutButton() {
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
    <>
      {user ? (
        <Button
          onClick={() => {
            api.signOut();
          }}
        >
          Sign out
        </Button>
      ) : (
        <Button
          onClick={() => {
            router.push('/signin');
          }}
        >
          Sign in
        </Button>
      )}
    </>
  );
}
