import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
