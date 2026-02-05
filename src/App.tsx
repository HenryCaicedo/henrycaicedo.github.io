import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-[#1f1f1f] shadow-md z-50">
        <NavBar />
      </nav>

      <main>
        <Body />
      </main>

      <div className='pt-20'>
        <Footer />
      </div>
    </>
  );
}

export default App;
