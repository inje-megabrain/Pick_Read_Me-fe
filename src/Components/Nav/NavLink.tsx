import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <>
      <a href={props.to}>{props.children}</a>
    </>
  );
};

export default NavLink;
