import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Container } from '../Container/Container';
import Logo from '@/components/icons/Logo';
import clsx from 'clsx';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(className, 'mb-6 w-full pt-6')}>
      <Container>
        <div className="flex justify-between">
          <Logo className="fill-current" />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};
