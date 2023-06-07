import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import accessAtom from '../../Atoms/access';

const Header = () => {
  const auth = useRecoilValue(accessAtom);

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

  return (
    <div>
      <div className="bg-zinc-500 h-24 flex items-center justify-between px-10">
        <div className="text-3xl">PICK README</div>
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
