import React from 'react';
import NavBar from './NavBar';
import GameContainer from './GameContainer'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <NavBar />
        <GameContainer />
      </header>
    </div>
  );
}

export default Home;
