import Head from 'next/head';
import '~/styles/globals.css';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Quiz Qrafter - Your Personal AI Tutor</title>
        <meta name="description" content="Quiz Qrafter, your personal AI tutor, helps you prepare for exams efficiently." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
