'use client';
import React, {useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function page() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    //const url = `${pathname}?${searchParams}`;
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
  return (
    <div>esta es la pagina del colegio: {pathname}</div>
  );
}

export default page;