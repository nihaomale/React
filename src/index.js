import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';


// let h1 = <h1>Hello world <span>副标题</span></h1> // jsx js 的元素对象 只有一个根节点
// let root = document.getElementById('root')
// ReactDOM.render(
//   h1, root
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// function block () {
//   let time = new Date().toLocaleTimeString()
//   let element = (<div>
//     <h1>现在的时间是{time}</h1>
//     </div>)
//   let root = document.querySelector('#root')
//   ReactDOM.render(element, root)
// }
// block()
// setInterval(() => {
//   block()
// }, interval);
// function Clock (props) {
//   return (
//     <div>
//        <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }
// function run () {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'))
// }
// run()
// setInterval(run, 1000)
let status = '发烧'
let element = (
  <div>
    {/* <h1>{1 + 1}</h1> */}
    <h1>{status === '发烧' ?  <button>隔离</button>  : '放假'}</h1>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))