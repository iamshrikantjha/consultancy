import React from 'react'
import Footer from './components/Footer';
import Menubar from './components/Menubar';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
  return (
    <div className="bg-[#FFF7F1]">
      {/* MENU BAR */}
      <Menubar />


      <LandingPage />
      


      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App