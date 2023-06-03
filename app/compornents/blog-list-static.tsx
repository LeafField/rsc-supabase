import React from 'react';
import Link from 'next/link';
import type { Database } from '@/database.types';

type Blog = Database['public']['Tables']['blogs']['Row'];

const fetchBlog = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: String(process.env.apikey),
    }),
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }
  const blogs: Blog[] = await res.json();
  return blogs;
};

const BlogListStatic = async () => {
  const blogs = await fetchBlog();

  return (
    <div className="p-4">
      {blogs.map((blog) => (
        <li key={blog.id} className="my-1 text-base">
          <Link prefetch={false} href={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default BlogListStatic;
