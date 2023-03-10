import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 0 }

    add = () => {
        // 1.对象式的setState
        // const {count} = this.state
        // this.setState({count:count+1},()=>{
        //     console.log('111',this.state.count)
        // })
        // console.log('222',this.state.count)

        // 2.函数式的setState
        // this.setState(state => ({ count: state.count + 1 }))

        // 但是事情也没有那么的绝对
        this.setState({count:this.state.count+1})

    }


    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我加一</button>
            </div>
        )
    }
}
