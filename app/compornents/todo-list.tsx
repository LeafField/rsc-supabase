import React from 'react';
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../../database.types';
import TodoItem from './todo-item';

const TodoList = async () => {
  const supabase = await createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true });

  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
