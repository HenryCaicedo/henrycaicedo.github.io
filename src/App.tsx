import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        {/* Your main content goes here */}
        <p>This is the body content.</p>
      </main>

      <footer>
        {/* Your footer content goes here */}
        <p>This is the footer.</p>
      </footer>
    </>
  );
}

export default App;
