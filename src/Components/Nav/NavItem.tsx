interface NavItemProps {
  children?: JSX.Element | string;
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li
      role="presentation"
      className={
        'pl-3 py-3 w-40 text-xl text-black active:text-violet-600 hover:bg-violet-300 hover:text-violet-600 cursor-pointer rounded-md'
      }
    >
      {children}
    </li>
  );
};

export default NavItem;
