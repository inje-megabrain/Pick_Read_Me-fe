import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import MainScroll from './MainScroll';

const Main = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <br />
      <div>Main페이지임니당</div>
      <MainScroll />
      {/* <RankNav /> */}
    </div>
  );
};

export default Main;
