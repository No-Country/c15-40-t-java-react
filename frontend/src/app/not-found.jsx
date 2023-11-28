import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

export default function NotFoundPage () {
  return (
    <>
      <div>Página no encontrada</div>
      <Button as={Link} href='/'>
        Volver al inicio
      </Button>
    </>
  );
}
