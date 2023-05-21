import { ReactNode } from 'react';

interface NavItemProps {
  children?: JSX.Element | string;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li
      role="presentation"
      className="pl-3 py-3 w-40 text-xl hover:bg-slate-300 cursor-pointer rounded-md"
    >
      {children}
    </li>
  );
};

export default NavItem;
