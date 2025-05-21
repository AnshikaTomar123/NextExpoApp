import { Button, Container, Typography } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export default function Home() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container style={{ marginTop: '100px' }}>
      <Typography variant="h4">Sign in with Google</Typography>
      <Button variant="contained" onClick={signInWithGoogle}>
        Google Sign-In
      </Button>
    </Container>
  );
}
