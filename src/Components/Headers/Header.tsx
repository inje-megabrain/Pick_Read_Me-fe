import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authAtom from '../../Atoms/auth';

const Header = () => {
  const auth = useRecoilValue(authAtom);

  const navigate = useNavigate();

  const handleMyPage = () => {
    navigate('/mypage');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="bg-zinc-500 h-24 flex items-center justify-between px-10">
        <div className="text-3xl">PICK README</div>
        <div>
          {auth ? (
            <button
              onClick={handleMyPage}
              className="btn btn-outline btn-secondary"
            >
              MyPage
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="btn btn-outline btn-primary"
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
