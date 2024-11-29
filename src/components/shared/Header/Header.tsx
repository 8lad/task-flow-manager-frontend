import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Container } from '../Container/Container';

export const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <ThemeSwitcher />
      </Container>
    </header>
  );
};
