import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

import Banner from './components/Banner';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';

// Routing:
// -- About
// -- Offer
// -- Portfolio (with feedback included)
// -- Contact

const App = () => {
  return (
    <>
      <CssBaseline />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/o-mnie' element={<About />} />
        <Route path='*' element={<div style={{ height: 'calc(100vh - 400px)' }}>Błąd 404: Nie znaleziono strony.</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
