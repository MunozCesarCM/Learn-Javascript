import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { SiteContext } from './context/SiteContext';
import LessonOverview from './pages/LessonOverview';
import Lesson from './pages/Lesson';
import Sidebar from './components/Sidebar';
import { sitemap } from './constants/sitemap';

const Home = React.lazy(() => import('./pages/Home'));

const Overview = React.lazy(() => import('./pages/Overview'));

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(window.innerWidth > 1024);
  const [theme, setTheme] = useState('catpuccinLight');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className={`${theme} pb-[20vh]`}>
      <SiteContext.Provider value={{ sidebarActive, setSidebarActive, theme, setTheme }}>
        <Suspense fallback={<div className='w-screen h-screen' />}>
          {pathname !== '/' && (<Sidebar />)}
          <section className={pathname !== '/' && sidebarActive ? 'ml-80' : null}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/overview' element={<Overview />} />

              {/* Map the main elements so they redirect to their first child */}
              {sitemap.map((main) => {
                if (main.id !== 'overview') {
                  return <Route
                    key={main.id}
                    path={`/${main.id}/`}
                    element={<Navigate to={`/${main.id}/${main.children[0].id}`} />}
                  />
                }
              })}

              {/* Map the children of every main element */}
              {sitemap.map((main) => {
                return main.children && main.children.map((child) => (
                  <>
                    <Route
                      key={`${main.id}${child.id}`}
                      path={`/${main.id}/${child.id}`}
                      element={ <LessonOverview section={child} /> }
                    />

                    {/* Map every card's route */}
                    {child.cards.map((cardList) => (
                      cardList.map((card) => (
                        <Route
                          key={`${main.id}${child.id}${card.id}`}
                          path={`/${main.id}/${child.id}/${card.id}`}
                          element={ <Lesson lesson={card} /> }
                        />
                      ))
                    ))}
                  </>
                ))
              })}
            </Routes>
          </section>
        </Suspense>
      </SiteContext.Provider>
    </main>
  );
}

export default App;
