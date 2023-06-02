'use client';

import React from 'react';

type Props = {
  error: Error;
};

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
      </p>
    </div>
  );
};

export default Error;
