import React from 'react';
import '../styling/grid.css';
import { connect } from 'react-redux';
import { newFoodPos } from './../actions';

class Grid extends React.Component {

  getGrid = () => {
    let gridNumbers = Array.from({length: 121}, (v,i) => i);
    return gridNumbers.map((idx) => {
        if (this.props.food.position === idx) {
          return <div className="grid-food-cell" key={idx}></div>
        } else {
          return <div className="grid-cell" key={idx}></div>
        }
      }
    )
  }

  newFoodPos = (event) => {
    if(event.keyCode === 70) {
      this.props.newFoodPos();
    }
 }

  componentDidMount() {
    document.addEventListener("keydown", this.newFoodPos, false)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.newFoodPos, false);
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


export default connect(mapStateToProps,{newFoodPos}) (Grid);
