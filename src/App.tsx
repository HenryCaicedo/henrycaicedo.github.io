import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        <Body/>
      </main>

      <footer>
        {/* Your footer content goes here */}
        <p>This is the footer.</p>
      </footer>
    </>
  );
}

export default App;
