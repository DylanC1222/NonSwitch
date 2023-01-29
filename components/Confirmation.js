import { Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/Confirmation.module.css';

export default function Confirmation() {
  const router = useRouter();
  return (
    <Container className={styles.container}>
      <h1>Email Confirmation</h1>
      <p>
        An email has been sent to the email address you signed up with. Please
        confirm your email there.
      </p>
      <Button
        onClick={() => {
          router.push('/');
        }}
      >
        Home page
      </Button>
    </Container>
  );
}
