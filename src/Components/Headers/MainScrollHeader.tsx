import { useNavigate } from 'react-router-dom';

const MainScrollHeader = () => {
  const navigate = useNavigate();

  const handleReadme = () => {
    navigate('/');
  };

  const handleRank = () => {
    navigate('rank');
  };
  return (
    <>
      <div className="mt-10">
        <div className="tabs tabs-boxed">
          <a className="tab tab-lg" onClick={handleReadme}>
            ReadMe
          </a>
          <a className="tab tab-lg" onClick={handleRank}>
            Rank
          </a>
        </div>
      </div>
    </>
  );
};

export default MainScrollHeader;
