import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <Router>
    <Navbar />
      <AppRouter />
    <Footer />
  </Router>
  );
}

export default App;
