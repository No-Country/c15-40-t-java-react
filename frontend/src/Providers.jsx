'use client';
import ContextProvider from './app/ContextProvider';

import React from 'react';

import { NextUIProvider } from '@nextui-org/react';

export default function Providers ({ children }) {
  return (
    <NextUIProvider>
      <ContextProvider>
        {children}
      </ContextProvider>
    </NextUIProvider>
  );
}
