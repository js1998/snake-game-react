import React from 'react';
import '../styling/grid.css';
import { connect } from 'react-redux';
import { newFoodPos, moveSnake } from './../actions';

class Grid extends React.Component {

  getGrid = () => {
    let gridNumbers = Array.from({length: 121}, (v,i) => i);
    return gridNumbers.map((idx) => {
        if (this.props.grid.foodPosition === idx) {
          return <div className="grid-food-cell" key={idx}></div>
        } else if (this.props.grid.headPosition === idx) {
          return <div className="grid-snake-head-cell" key={idx}>H</div>
        } else if (this.props.grid.tailPosition === idx) {
          return <div className="grid-snake-tail-cell" key={idx}>T</div>
        } else if (this.props.grid.bodyPositions.includes(idx)) {
          return <div className="grid-snake-body-cell" key={idx}></div>
        } else {
          return <div className="grid-cell" key={idx}></div>
        }
      }
    )
  }

  moveSnake = (event) => {
    if (37 <= event.keyCode && event.keyCode <= 40 ){
      this.props.moveSnake(event.keyCode);
    } else if(event.keyCode === 70) { //TEMP REMOVE THIS LATER
      this.props.newFoodPos();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.moveSnake, false)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.moveSnake, false);
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
  return {
    grid: state.grid,
  }
}


export default connect(mapStateToProps,{ newFoodPos, moveSnake }) (Grid);
