import React, { useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Home = React.lazy(() => import('./pages/Home'));
const Overview = React.lazy(() => import('./pages/Overview'));

const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<div className='w-screen h-screen' />}>
      {pathname !== '/' && (<Sidebar />)}
      <section className={pathname !== '/' && 'ml-72'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/overview' element={<Overview />} />
        </Routes>
      </section>
    </Suspense>
  );
}

export default App;
