import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Container } from '../Container/Container';
import Logo from '@/components/icons/Logo';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Auth0Routes } from '@/utils/routes';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(className, 'mb-6 w-full pt-6')}>
      <Container>
        <div className="flex justify-between">
          <Logo className="fill-current" />
          <div className="flex items-center gap-x-4">
            <Button asChild>
              <Link href={Auth0Routes.Login}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={Auth0Routes.Logout}>Logout</Link>
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};
