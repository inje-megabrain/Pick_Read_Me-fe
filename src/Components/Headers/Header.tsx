import { useNavigate } from 'react-router-dom';
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

  const gitHubURL = `http://52.78.80.150:9000/api/login`;
  const handleLogin = () => {
    console.log('깃허브로 로그인합니다.');
    window.location.href = gitHubURL;
    //유저 정보 요청
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
