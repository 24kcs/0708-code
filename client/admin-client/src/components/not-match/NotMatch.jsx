import React, { Component } from 'react';
import four from './images/404.jpg'
class NotMatch extends Component {
  render() {
    return (
      <div>
      
        <img src={four} alt="404"/>
      </div>
    );
  }
}

export default NotMatch;