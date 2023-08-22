import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offer from './pages/Offer';

const App = () => {
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
          element={<div style={{ height: 'calc(100vh - 400px)' }}>Błąd 404: Nie znaleziono strony.</div>}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
