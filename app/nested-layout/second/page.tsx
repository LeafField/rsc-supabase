import React from 'react';
import { Noto_Sans_Javanese } from 'next/font/google';

const noto = Noto_Sans_Javanese({ subsets: ['javanese'], weight: '400' });

const SecondPage = () => {
  return (
    <div className="m-10 text-center">
      <p className={noto.className}>Page 2</p>
    </div>
  );
};

export default SecondPage;
