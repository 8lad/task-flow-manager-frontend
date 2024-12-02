'use client';

import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Container } from '../Container/Container';
import Logo from '@/components/icons/Logo';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Auth0Routes, MainRoutes } from '@/utils/routes';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { user, isLoading } = useUser();

  const renderAuth0Content = () => {
    if (isLoading) {
      return null;
    }

    return user ? (
      <>
        <Button asChild>
          <Link href={Auth0Routes.Logout}>Logout</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href={MainRoutes.Dashboard}>Dashboard</Link>
        </Button>
        <div className="flex items-center gap-x-3">
          {user?.picture && (
            <Image
              src={user?.picture}
              width={40}
              height={40}
              alt={user?.name || 'User avatar'}
              className="rounded-full"
            />
          )}
          <span>{user?.name}</span>
        </div>
      </>
    ) : (
      <>
        <Button asChild>
          <Link href={Auth0Routes.Login}>Login</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href={Auth0Routes.SignUp}>Sign Up</Link>
        </Button>
      </>
    );
  };

  return (
    <header className={clsx(className, 'mb-6 min-h-[70px] w-full pt-6')}>
      <Container>
        <div className="flex justify-between">
          <Logo className="fill-current" />
          <div className="flex items-center gap-x-4">
            {renderAuth0Content()}
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};
