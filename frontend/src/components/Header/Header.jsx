import React from 'react';

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as LinkUI
} from '@nextui-org/react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { Index } from '.';

export default function Header () {
  const { NavbarLinks, isMenuOpen, setIsMenuOpen } = Index();

  const pathname = usePathname();

  return (
    <Navbar classNames={{ base: 'p-4 bg-transparent', wrapper: 'bg-white rounded-xl shadow-xl shadow-purple-500/25', menu: 'pt-10 backdrop-blur-none bg-white', toggleIcon: 'text-orange-500' }} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit"><span className='text-fuchsia-500'>Educ</span><span className='text-orange-500'>{'{ar}'}</span></p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {NavbarLinks.map((link) => {
          const { name, path } = link;

          return (
            <NavbarItem key={path}>
              <LinkUI className={`${pathname === path ? 'font-bold text-fuchsia-500 underline' : 'text-purple-500'}`} color='primary' as={Link} href={path} underline='hover'>
                {name}
              </LinkUI>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end" className='hidden md:flex'>
        <NavbarItem>
          <Button className='hover:!text-white' disableRipple as={Link} href="/iniciar-sesion" color='warning' variant='ghost'>
            Eres un colegio ?
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {NavbarLinks.map((link) => {
          const { name, path } = link;

          return (
            <NavbarMenuItem key={path}>
              <LinkUI className={`${pathname === path ? 'font-bold text-fuchsia-500 underline' : 'text-purple-500'}`} color='primary' as={Link} href={path} underline='hover'>
                {name}
              </LinkUI>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem className='mt-10 self-center'>
          <Button className='hover:!text-white' disableRipple as={Link} href="/iniciar-sesion" color='warning' variant='ghost'>
            Eres un colegio ?
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
