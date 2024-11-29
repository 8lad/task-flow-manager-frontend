import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Container } from '../Container/Container';
import Logo from '@/components/icons/Logo';

export const Header = () => {
  return (
    <header className="mb-6 w-full pt-6">
      <Container>
        <div className="flex justify-between">
          <Logo className="fill-current" />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};
