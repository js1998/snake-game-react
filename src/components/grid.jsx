import React from 'react';
import '../styling/grid.css';
import { connect } from 'react-redux';

class Grid extends React.Component {

  getGrid = () => {
    let gridNumbers = Array.from({length: 121}, (v,i) => i);
    return gridNumbers.map((idx) => {
        return <div className="grid-cell" key={idx}></div>
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

const mapStateToProps = state => {
  return { food: state.food }
}


export default connect(mapStateToProps) (Grid);
