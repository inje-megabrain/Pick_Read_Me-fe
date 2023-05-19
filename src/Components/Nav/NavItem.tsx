import { ReactNode } from 'react';

interface NavItemProps {
  children?: JSX.Element | string;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li role="presentation" className="mx-auto my-0 w-24">
      {children}
    </li>
  );
};

export default NavItem;
