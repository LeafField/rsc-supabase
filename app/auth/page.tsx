import React from 'react';
import Auth from '../compornents/auth';

const AuthPage = async () => {
  return (
    <main className="flex h-[calc(100vh-56px)] flex-col items-center justify-center">
      <Auth />
    </main>
  );
};

export default AuthPage;
