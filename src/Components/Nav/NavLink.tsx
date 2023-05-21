import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLinks = ({ to, children }: NavLinkProps) => {
  return (
    <>
      <NavLink id="active" to={to}>
        {children}
      </NavLink>
    </>
  );
};

export default NavLinks;
