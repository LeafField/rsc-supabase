import React, { FC, ReactNode } from 'react';
import { Suspense } from 'react';
import Spinner from '../../compornents/Spinner';
import EditTask from '../../compornents/todo-edit';
import TodoList from '../../compornents/todo-list';

type Props = {
  children: ReactNode;
};

const TodoLayout: FC<Props> = async ({ children }) => {
  return (
    <section className="flex">
      <aside className="h-[calc(100vh-56px)] w-1/4 bg-gray-200">
        <EditTask />
        <Suspense fallback={<Spinner />}>
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  );
};

export default TodoLayout;
