import React from 'react';
import './GameContainer.css';
import Grid from './Grid'

class GameContainer extends React.Component {
  render() {
    return (
      <div className='game-container'>
        <Grid />
      </div>
    )
  };
}
export default GameContainer;
