import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
const { Provider,Consumer } = MyContext

export default class A extends Component {

    state = { username: 'Harry', age: 18 }

    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}</h4>
                <Provider value={{ username, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        console.log("B没有声明，this.context：",this.context)
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}
// 类式组件可以用
// class C extends Component {
//     // 只有声明才能拿到
//     static contextType = MyContext
//     render() {
//         console.log("C有声明，this.context：",this.context)
//         const {username,age} = this.context
//         return (
//             <div className='grand'>
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名是：{username}，年龄是：{age}</h4>
//             </div>
//         )
//     }
// }

// 函数式组件和类式都可以用
function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是：
            <Consumer>
                {
                    value =>{
                        return `${value.username},年龄是：${value.age}`
                    }
                }
            </Consumer>
            </h4>
        </div>
    )
}