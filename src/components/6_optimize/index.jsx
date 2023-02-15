// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {

  state = {carname:'pppp'}

  changeCar =()=>{
    // this.setState({carname:'mmmm'})
    this.setState({})
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log(this.props,this.state)//目前的
  //   // console.log(nextProps,nextState)//接下来要变化的
  //   if(nextState.carname == this.state.carname) return false
  //   else return true
  // }

  render() {
    const {carname} = this.state
    console.log("Parent--render")
    return (
      <div className='parent'>
      <h3>我是Parent组件</h3>
      <span>我的车名字是：{carname}</span>
      <button onClick={this.changeCar}>点我换车</button>
        <Child carname={carname}/>
      </div>
    )
  }
}
class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log(this.props,this.state)//目前的
  //   // console.log(nextProps,nextState)//接下来要变化的
  //   if(nextProps.carname == this.props.carname) return false
  //   else return true
  // }

  render() {
    console.log("Child--render")
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carname}</span>
      </div>
    )
  }
}