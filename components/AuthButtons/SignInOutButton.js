import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

export default function SignInOutButton({ user }) {
  return <>{user ? <SignOutButton /> : <SignInButton />}</>;
}
