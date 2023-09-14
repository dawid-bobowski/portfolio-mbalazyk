import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CssBaseline />
      <Banner />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/o-mnie'
          element={<About />}
        />
        <Route
          path='/oferta'
          element={<Offer />}
        />
        <Route
          path='/kontakt'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
