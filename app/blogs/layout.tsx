import React, { FC, ReactNode } from 'react';
import BlogListStatic from '../compornents/blog-list-static';
import RefreshButton from '../compornents/refresh-btn';

type Props = {
  children: ReactNode;
};

const BlogLayout: FC<Props> = ({ children }) => {
  return (
    <section className="flex">
      <aside className="h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2">
        <BlogListStatic />
        <div className="flex justify-center">
          <RefreshButton />
        </div>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  );
};

export default BlogLayout;
