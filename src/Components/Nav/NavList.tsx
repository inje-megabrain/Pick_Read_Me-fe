interface NavListProps {
  children?: JSX.Element[];
}

const NavList = ({ children }: NavListProps) => {
  return (
    <ul className="list-none mx-auto my-0 pl-2 w-44 border-l-2 border-s-indigo-300">
      {children}
    </ul>
  );
};

export default NavList;
