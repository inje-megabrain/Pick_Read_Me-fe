import { NavLink, useNavigate } from 'react-router-dom';
import '../Nav/Nav.css';

const MainScrollHeader = () => {
  const navigate = useNavigate();

  const handleReadme = () => {
    navigate('/');
  };

  const handleRank = () => {
    navigate('/rank');
  };
  return (
    <>
      <div
        className="mt-10 mx-auto h-20 flex items-center"
        // style={{ margin: '-25 0 0 -25' }}
      >
        <nav id="active">
          <ul>
            <li className="float-left text-xl ml-5 mr-5">
              <NavLink to="/">
                <span>ReadMe</span>
              </NavLink>
            </li>
            <li className="float-left text-xl">
              <NavLink to="/rank">
                <span>Rank</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <br />
      </div>
    </>
  );
};

export default MainScrollHeader;
