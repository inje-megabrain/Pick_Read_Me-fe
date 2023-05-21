import '../Nav/Nav.css';

interface NavItemProps {
  children?: JSX.Element | string;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li
      role="presentation"
      id="active"
      className={
        'pl-3 py-3 w-40 text-xl text-black active:text-blue-900 hover:bg-slate-300 hover:text-blue-900 cursor-pointer rounded-md'
      }
    >
      {children}
    </li>
  );
};

export default NavItem;
