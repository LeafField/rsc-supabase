import React from 'react';
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

const BlogList = async () => {
  const blogs = await fetchBlog();

  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul className="text-sm">
        {blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
