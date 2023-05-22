import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav/Nav.css';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLinks = ({ to, children }: NavLinkProps) => {
  return (
    <>
      {/* <NavLink id="link" to={to}>
        {children}
      </NavLink> */}
      <a href={to} className="w-40">
        <span className="pl-3 py-3 w-40 text-xl text-black active:text-blue-900 hover:bg-slate-300 hover:text-blue-900 cursor-pointer rounded-md">
          {children}
        </span>
      </a>
    </>
  );
};

export default NavLinks;
