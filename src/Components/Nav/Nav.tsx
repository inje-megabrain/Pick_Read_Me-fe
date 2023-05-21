import { ReactNode } from 'react';
import '../Nav/Nav.css';

interface NavProps {
  children?: ReactNode;
}

const Nav = (props: NavProps) => {
  return <nav id="active">{props.children}</nav>;
};

export default Nav;
