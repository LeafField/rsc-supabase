import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const FirstLayout: FC<Props> = ({ children }) => {
  return (
    <main className="mt-6 text-center">
      <p>Layout 1</p>
      {children}
    </main>
  );
};

export default FirstLayout;
