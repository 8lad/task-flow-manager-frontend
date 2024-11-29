import clsx from 'clsx';
import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const headingStyles = {
  h1: 'text-[2.5rem] font-bold leading-[1.2] mb-6',
  h2: 'text-[2rem] font-semibold leading-[1.3] mb-5',
  h3: 'text-[1.75rem] font-medium leading-[1.4] mb-4',
  h4: 'text-[1.5rem] font-medium leading-[1.5] mb-3',
  h5: 'text-[1.25rem] font-medium leading-[1.6] mb-2.5',
  h6: 'text-[1rem] font-medium leading-[1.6] mb-2',
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const HeadingTag = level;
  return <HeadingTag className={clsx(headingStyles[level], className)}>{children}</HeadingTag>;
};
