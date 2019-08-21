import React from 'react';
import './../styling/navBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-text'>
          Welcome to Snake!
        </div>
      </div>
    )
  };
}
export default NavBar;
