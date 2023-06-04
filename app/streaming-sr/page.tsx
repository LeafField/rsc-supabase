import React, { Suspense } from 'react';
import BlogList from '../compornents/blog-list';
import NewsList from '../compornents/news-list';
import Spinner from '../compornents/Spinner';

export const revalidate = 0;

const StreamingServerRenderingPage = () => {
  return (
    <section className="flex">
      <aside className="w-1/4 ">
        <section className="fixed m-1 h-full border border-blue-500 bg-gray-200 p-1">
          <Suspense fallback={<Spinner color="border-green-500" />}>
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main>
        <section className="w-3/4 fixed">
          <Suspense fallback={<Spinner />}>
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  );
};

export default StreamingServerRenderingPage;
