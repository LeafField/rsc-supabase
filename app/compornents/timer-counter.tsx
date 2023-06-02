'use client';

import React, { useEffect, useState } from 'react';

const TimerCounter = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCount((prevState) => prevState + 1),
      500
    );
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <p>{count}</p>
      <button
        className="text-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  );
};

export default TimerCounter;
