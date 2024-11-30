import React from 'react';
import { Container } from '../Container/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="row-start-3 mb-4 flex flex-wrap items-center justify-center gap-6">
      <Container>
        <span className="block text-sm">
          &copy; {currentYear} <i className="text-main-accent">TFM</i>
        </span>
      </Container>
    </footer>
  );
};
