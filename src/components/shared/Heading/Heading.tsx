import clsx from 'clsx';
import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const headingStyles = {
  h1: 'text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.2] mb-4 sm:mb-6',
  h2: 'text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold leading-[1.3] mb-3.5 sm:mb-5',
  h3: 'text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium leading-[1.4] mb-3 sm:mb-4',
  h4: 'text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-medium leading-[1.5] mb-2.5 sm:mb-3',
  h5: 'text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-medium leading-[1.6] mb-2 sm:mb-2.5',
  h6: 'text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium leading-[1.6] mb-1.5 sm:mb-2',
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const HeadingTag = level;
  return <HeadingTag className={clsx(headingStyles[level], className)}>{children}</HeadingTag>;
};
