import { ReactNode } from 'react';
import '../Nav/Nav.css';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLinks = ({ to, children }: NavLinkProps) => {
  return (
    <>
      <Link to={to}></Link>
    </>
  );
};

export default NavLinks;
