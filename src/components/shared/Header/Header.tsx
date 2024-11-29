import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className="w-full">
      <ThemeSwitcher />
    </header>
  );
};
