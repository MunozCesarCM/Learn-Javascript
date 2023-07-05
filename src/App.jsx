import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { SiteContext } from './context/SiteContext';
import Sidebar from './components/Sidebar';

const Home = React.lazy(() => import('./pages/Home'));

const Overview = React.lazy(() => import('./pages/Overview'));

const Introduction = React.lazy(() => import('./pages/JSBasics/Introduction'));
const Variables = React.lazy(() => import('./pages/JSBasics/Variables'));

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(window.innerWidth > 1024);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SiteContext.Provider value={{ sidebarActive, setSidebarActive }}>
      <Suspense fallback={<div className='bg-terminal-grey w-screen h-screen' />}>
        {pathname !== '/' && (<Sidebar />)}
        <section className={pathname !== '/' && sidebarActive ? 'ml-80' : null}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/javascript-basics/' element={<Navigate to='/javascript-basics/introduction' />} />
            <Route path='/javascript-basics/introduction' element={<Introduction />} />
            <Route path='/javascript-basics/variables' element={<Variables />} />
          </Routes>
        </section>
      </Suspense>
    </SiteContext.Provider>
  );
}

export default App;
