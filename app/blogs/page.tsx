import React, { FC } from 'react';
import RouterBtn from '../compornents/router-btn';

const BlogPage: FC = () => {
  return (
    <div className="m-10 text-center">
      <span className="text-lg">Click a title on the left to detail🚀</span>
      <div className="my-5 flex justify-center">
        <RouterBtn />
      </div>
    </div>
  );
};

export default BlogPage;
