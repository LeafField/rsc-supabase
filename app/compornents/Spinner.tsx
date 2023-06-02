import React from 'react';

type Props = {
  color?: string;
};

const Spinner: React.FC<Props> = ({ color = 'border-blue-500' }) => {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 rounded-full animate-spin border-4 ${color} border-t-transparent`}
      ></div>
    </div>
  );
};

export default Spinner;
