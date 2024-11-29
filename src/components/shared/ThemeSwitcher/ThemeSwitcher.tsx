'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const onSwitchChange = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));
  return (
    <div>
      <Switch onChange={onSwitchChange} />
    </div>
  );
};
