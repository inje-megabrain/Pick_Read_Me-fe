interface NavListProps {
  children?: JSX.Element[];
}

const NavList = ({ children }: NavListProps) => {
  return (
    <ul className="list-none mx-auto my-0 pl-2 w-44 bg-violet-200 rounded-2xl shadow-xl">
      {children}
    </ul>
  );
};

export default NavList;
