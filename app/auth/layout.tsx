import { headers, cookies } from 'next/headers';
import SupabaseListner from '../compornents/supabase-listner';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../../database.types';

import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = async ({ children }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <>
      <SupabaseListner accessToken={session?.access_token} />
      {children}
    </>
  );
};

export default AuthLayout;
