import React, { Component } from 'react';

function WithHoc(WrappedComponent){
  return class extends Component{
    state = {
      userName: '',
      userPwd: ''
    }
    handleClick = (key) => {
      return (e) => {
        this.setState({
          [key]: e.target.value
        })
      }
    }
    render(){
      return <WrappedComponent handleClick={this.handleClick} {...this.state} />
    }
  }
}

export default WithHoc;