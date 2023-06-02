import NoteList from './compornents/notes-list';
import TimerCounter from './compornents/timer-counter';
import React, { Suspense } from 'react';
import Spinner from './compornents/Spinner';
import RefreshButton from './compornents/refresh-btn';

const Page = () => {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NoteList />
        </Suspense>
        <TimerCounter />
        <RefreshButton />
      </div>
    </main>
  );
};

export default Page;
