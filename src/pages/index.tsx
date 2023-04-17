import Head from 'next/head';
import { type NextPage } from 'next';

import AuthShowcase from '@/components/AuthShowcase';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Learn auth</title>
      <meta name='description' content='auth login app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='flex gap-20 min-h-screen flex-col items-center justify-center bg-green text-primary'>
      <h1 className='text-3xl font-bold'>NextAuth</h1>

      <AuthShowcase />
    </main>
  </>
);

export default Home;
