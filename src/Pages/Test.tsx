import { Outlet } from 'react-router-dom';

const Test = () => {
  return (
    <>
      <div>
        <h1>Test 페이지 1</h1>
        <h2>Test 페이지 1</h2>
        <Outlet />
        <h3>Test 페이지 1</h3>
      </div>
      <div>
        <h1>Test 페이지 1</h1>
      </div>
    </>
  );
};

export default Test;
