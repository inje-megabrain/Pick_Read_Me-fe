import { ReactNode } from 'react';
import '../Nav/Nav.css';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLinks = ({ to, children }: NavLinkProps) => {
  return (
    <>
      <a href={to} className="w-40">
        <span className="pl-3 py-3 w-40 text-xl text-black active:text-violet-600 hover:bg-violet-300 hover:text-violet-600 cursor-pointer rounded-md">
          {children}
        </span>
      </a>
    </>
  );
};

export default NavLinks;
