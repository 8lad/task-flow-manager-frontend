import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, 'mx-auto w-full max-w-screen-2xl px-3 xl:px-7')}>
      {children}
    </div>
  );
};
