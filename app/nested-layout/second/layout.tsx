import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SecondLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <p>Layout 2</p>
      {children}
    </>
  );
};

export default SecondLayout;
