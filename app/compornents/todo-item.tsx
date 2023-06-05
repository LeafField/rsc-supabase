'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import supabase from '../../utils/supabase';
import useStore from '../../store';
import type { Database } from '../../database.types';

type Todo = Database['public']['Tables']['todos']['Row'];

type Props = {
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const router = useRouter();
  const updateTask = useStore((state) => state.updateEditedTask);
  const resetTask = useStore((state) => state.resetEditedTask);
  const updateMutate = async (id: string, completed: boolean) => {
    console.log(completed);
    await supabase.from('todos').update({ completed: completed }).eq('id', id);
    resetTask();
    router.refresh();
  };
  const deleteMutate = async (id: string) => {
    await supabase.from('todos').delete().eq('id', id);
    router.refresh();
  };
  return (
    <li className="my-2">
      <input
        type="checkbox"
        className="mr-1"
        checked={todo.completed}
        onChange={() => updateMutate(todo.id, !todo.completed)}
      />
      <Link href={`auth/todo-crud/${todo.id}`}>{todo.title}</Link>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            updateTask({
              id: todo.id,
              title: todo.title,
            });
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => deleteMutate(todo.id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
