'use client';
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import supabase from '@/utils/supabase';
import useStore from '@/store';

const Auth = () => {
  const { loginUser } = useStore();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setEmail('');
      setPassword('');
      if (error) {
        alert(error.message);
      } else {
        router.push('/auth/todo-crud');
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      setEmail('');
      setPassword('');
      if (error) {
        alert(error.message);
      }
    }
  };

  const signout = () => {
    supabase.auth.signOut();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{loginUser.email}</p>
      <ArrowRightOnRectangleIcon
        className="my-4 w-6 h-6 cursor-pointer text-blue-500"
        onClick={signout}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:border-indigo-700"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p
        onClick={() => setIsLogin(!isLogin)}
        className="cursor-pointer font-medium hover:text-indigo-500"
      >
        chenge mode ?
      </p>
    </div>
  );
};

export default Auth;
