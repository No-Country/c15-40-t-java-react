'use client';

import { useState } from 'react';

export { default as Header } from './Header';

export const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    { name: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
    { name: 'Buscador', path: '/escuelas' },
    { name: 'Comparar Colegios', path: '/comparar-colegios' }
  ];

  return { NavbarLinks, isMenuOpen, setIsMenuOpen };
};
