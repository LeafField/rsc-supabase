import React, { FC } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import type { Database } from '@/database.types';

type Blogs = Database['public']['Tables']['blogs']['Row'];

type PageProps = {
  params: {
    blogId: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: String(process.env.apikey),
    }),
  });
  const blogs: Blogs[] = await res.json();

  return blogs.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}

const fecthBlog = async (blogId: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/blogs?id=eq.${blogId}&select=*`,
    {
      headers: new Headers({
        apikey: String(process.env.apikey),
      }),
      cache: 'force-cache',
    }
  );
  // if (!res.ok) {
  //   throw new Error('Faild to Fetch data in server');
  // }
  const blogs: Blogs[] = await res.json();
  return blogs[0];
};

const BlogDatailPage: FC<PageProps> = async ({ params }) => {
  const blog = await fecthBlog(params.blogId);
  if (!blog) return notFound();

  return (
    <div className="mt-16 border-2 p-8">
      <p>
        <strong className="mr-3">Task ID:</strong> {blog.id}
      </p>
      <p>
        <strong className="mr-3">Title:</strong> {blog.title}
      </p>
      <p>
        <strong className="mr-3">Content:</strong> {blog.content}
      </p>
      <p>
        <strong className="mr-3">CreatedAt:</strong>
        {blog && format(new Date(blog.created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>
      <Link href={`blogs`}>
        <ArrowUturnLeftIcon className="mt-3 h-6 w-6 cursor-pointer text-blue-500" />
      </Link>
    </div>
  );
};

export default BlogDatailPage;
