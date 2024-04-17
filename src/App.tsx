import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';


function App() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <NavBar />
      </nav>

      <main>
        <Body/>
      </main>

      <footer className='min-h-80'>
        {/* Your footer content goes here */}
        <p>Website designed and implemented by Henry Caicedo</p>
      </footer>
    </>
  );
}

export default App;
