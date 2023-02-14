import React from 'react'
import ReactDOM from 'react-dom'

// 1.类式组件
// class Demo extends React.Component {

//     state = {count:0}
//     myRef = React.createRef()

//     add = ()=>{
//         this.setState(state => ({count:state.count+1}))
//     }

//     unmount = ()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = ()=>{
//         alert(this.myRef.current.value)
//     }

//     componentDidMount(){
//         this.timer = setInterval(()=>{
//             console.log('@@@')
//             this.setState(state => ({count:state.count+1}))
//         },1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我加一</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }

// 2.函数式组件
function Demo() {

    const [count, setCount] = React.useState(0)
    // const [name, setName] = React.useState('Jack')
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            console.log('@')
            setCount(count => count + 1)
        }, 1000)
        return ()=>{
            console.log('return')
            clearInterval(timer)
        }
    },[])

    function add() {
        // 第一种写法
        // setCount(count+1)
        // 第二种写法
        setCount(count => count + 1)
    }

    // function change(){
    //     setName('Rose')
    // }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show(){
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为:{count}</h2>
            <button onClick={add}>点我加一</button>
            {/* <h2>当前名字为:{name}</h2>
            <button onClick={change}>点我改名</button> */}
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo