import React, { Component } from 'react';

export default  function WithHoc (a,b) {
  return (WrappedComponent)=>{
    return class extends Component{
      // static displayName='WithHoc'
      // 修改高阶组件,返回的新的组件名字
      static displayName=`Form(${WrappedComponent.displayName||WrappedComponent.name||'Component'})`
      state={
        userName:'',
        userPwd:''
      }
      handleSubmit=(type)=>{
        return (e)=>{
          this.setState({
            [type]:e.target.value
          })
        }
      }
      render(){
        console.log(a,b)
        return <WrappedComponent handleSubmit={this.handleSubmit} {...this.state}/>
      }
    }
  }
 
}
