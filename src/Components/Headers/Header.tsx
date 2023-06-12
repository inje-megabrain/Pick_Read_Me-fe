import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useRefresh } from '../../Hooks/useRefresh';

const Header = () => {
  const auth = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  const handleWrite = () => {
    navigate('/write');
  };

  const handleMyPage = () => {
    navigate('/mypage/profile');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  useRefresh();

  return (
    <div>
      <div className="bg-violet-200 h-24 flex items-center justify-between px-10">
        <div className="text-3xl text-secondary">PICK README</div>
        <div>
          {auth ? (
            <>
              <button
                onClick={handleWrite}
                className="btn btn-outline btn-secondary mr-5"
              >
                Write
              </button>
              <button
                onClick={handleMyPage}
                className="btn btn-outline btn-secondary"
              >
                MyPage
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="btn btn-outline btn-secondary"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
