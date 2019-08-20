import React from 'react';
import './Grid.css';

class Grid extends React.Component {

  getGrid = () => {
    let gridNumbers = Array.from({length: 121}, (v,i) => i);
    return gridNumbers.map((idx) => {
        return <div className="grid-cell" key={idx}>{idx}</div>
      }
    )
  }

  render() {
    return (
      <div className='grid-container'>
        {this.getGrid()}
      </div>
    )
  };
}
export default Grid;
