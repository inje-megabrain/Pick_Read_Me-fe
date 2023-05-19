interface NavListProps {
  children?: JSX.Element[];
}

const NavList = ({ children }: NavListProps) => {
  return <ul className="list-none">{children}</ul>;
};

export default NavList;
