import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function SignInButton() {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => {
        router.push('/signin');
      }}
      disableElevation
    >
      Sign in
    </Button>
  );
}
