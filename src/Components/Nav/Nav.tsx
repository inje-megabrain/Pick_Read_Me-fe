import { ReactNode } from 'react';

interface NavProps {
  children?: ReactNode;
}

const Nav = (props: NavProps) => {
  return <nav>{props.children}</nav>;
};

export default Nav;
