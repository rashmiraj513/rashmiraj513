import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, FC } from 'react';

import GlobalStyle from './assets/styles/GlobalStyles.ts';
import ResetStyle from './assets/styles/ResetStyles.ts';

const SpinnerFullPage = lazy(() => import('./components/SpinnerFullPage.tsx'));
const Root = lazy(() => import('./pages/Root.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Experiences = lazy(() => import('./pages/Experiences.tsx'));
const Work = lazy(() => import('./pages/Work.tsx'));
const Skills = lazy(() => import('./pages/Skills.tsx'));
const Connect = lazy(() => import('./pages/Connect.tsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.tsx'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ResetStyle />
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route element={<Root />}>
            <Route index element={<Navigate replace to='/about' />} />
            <Route path='about' element={<About />} />
            <Route path='experiences' element={<Experiences />} />
            <Route path='work' element={<Work />} />
            <Route path='skills' element={<Skills />} />
            <Route path='connect' element={<Connect />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
