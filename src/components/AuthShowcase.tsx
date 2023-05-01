import { signIn, signOut, useSession } from 'next-auth/react';

const AuthShowcase = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <section className='flex flex-col items-center gap-3'>
        <p>Session expires: {new Date(session.expires).toUTCString()}</p>
        <p>
          Signed in as <strong>{session.user?.name}</strong> -{' '}
          {session.user?.email}
        </p>
        <button className='bg-pink px-3 py-1' onClick={() => void signOut()}>
          Sign out
        </button>
      </section>
    );
  }

  return (
    <section>
      <p>Not signed in</p>
      <button
        className='bg-yellow px-3 py-1 text-dark'
        onClick={() => void signIn()}
      >
        Sign in
      </button>
    </section>
  );
};

export default AuthShowcase;
