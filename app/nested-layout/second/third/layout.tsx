import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ThirdLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <p>Layout 3</p>
      {children}
    </>
  );
};

export default ThirdLayout;
