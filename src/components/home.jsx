import React from 'react';
import NavBar from './navBar';
import Grid from './grid';
import './../styling/home.css';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className='game-container'>
        <Grid />
      </div>
    </div>
  );
}

export default Home;
