import React, { FC } from 'react';
import { notFound } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { format } from 'date-fns';
import type { Database } from '../../../../database.types';

type PageProps = {
  params: {
    todoId: string;
  };
};

const TodoDetailPage: FC<PageProps> = async ({ params }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    cookies,
    headers,
  });
  const { data: todo, error } = await supabase
    .from('todos')
    .select('*')
    .eq('id', params.todoId)
    .single();

  if (!todo) return notFound();
  return (
    <div className="mt-16 border-2 p-8">
      <p>Task ID: {todo.id}</p>
      <p>Title:{todo.title}</p>
      <p>Status:{todo.completed ? 'done' : 'not yet'}</p>
      <p>Created At: </p>
      {todo && format(new Date(todo.created_at), 'yyyy-MM-dd HH:mm:ss')}
    </div>
  );
};

export default TodoDetailPage;
