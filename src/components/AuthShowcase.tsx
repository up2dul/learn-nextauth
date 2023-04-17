import { signIn, signOut, useSession } from 'next-auth/react';

const AuthShowcase = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <section>
        <p>
          Signed in as {session.user?.name} - {session.user?.email}
        </p>
        <button className='bg-pink px-3 py-1' onClick={() => void signOut()}>
          Sign out
        </button>
      </section>
    );
  }

  return (
    <section>
      Not signed in <br />
      <button className='bg-yellow text-dark px-3 py-1' onClick={() => void signIn()}>
        Sign in
      </button>
    </section>
  );
};

export default AuthShowcase;
