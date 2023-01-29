import { Button } from '@mui/material';
import api from '../../lib/Store';

export default function SignOutButton() {
  return (
    <Button
      variant="contained"
      onClick={() => {
        api.signOut();
      }}
      disableElevation
    >
      Sign out
    </Button>
  );
}
