import React, { useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Overview = React.lazy(() => import('./pages/Overview'));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<div className='w-screen h-screen' />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </Suspense>
  );
}

export default App;
