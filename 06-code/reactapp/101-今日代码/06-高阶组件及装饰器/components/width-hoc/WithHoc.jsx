import React, { Component } from 'react';

function WithHoc(a,b){
  return (WrappedComponent)=>{

   return class extends Component{
     //static displayName='xxx'
     static displayName=`form(${WrappedComponent.replayName||WrappedComponent.name||'Component'})`
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
        console.log(a,b)
        return <WrappedComponent handleClick={this.handleClick} {...this.state} />
      }
    }
  }
}

export default WithHoc;