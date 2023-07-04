import React, { useEffect, Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Home = React.lazy(() => import('./pages/Home'));

const Overview = React.lazy(() => import('./pages/Overview'));
const Introduction = React.lazy(() => import('./pages/JSBasics/Introduction'));

const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<div className='bg-[#313855] w-screen h-screen' />}>
      {pathname !== '/' && (<Sidebar />)}
      <section className={pathname !== '/' && 'ml-80'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/javascript-basics/' element={<Navigate to='/javascript-basics/introduction' />} />
          <Route path='/javascript-basics/introduction' element={<Introduction />} />
        </Routes>
      </section>
    </Suspense>
  );
}

export default App;
