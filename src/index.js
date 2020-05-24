import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';


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
// let status = '正常'
// // let elemnet = (
// //   h1        
// // )
// let element = (
//   <div>
//     {/* <h1>{1 + 1}</h1> */}
//     <h1 className="bgcolor aaa">{status === '发烧' ?  <button>隔离</button>  : '放假'}</h1>
//   </div>
// )
// import Child from "./child"
// console.log();

// function Child (props) {
//   let weather = props.weather
//   return (
//     <div>
//       是否出门
//       <h1>{weather==='晴天' ? '出门' : '不出门'}</h1>
//     </div>
//   )
// }
// class Parent extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>HelloWorld</h1>
//         <Child weather={this.props.weather} />
//       </div>
//     )
//   }
// }
// class Clock extends React.Component{
//   constructor (props) {
//     super(props)
//     this.state = {
//          time: new Date().toLocaleTimeString(),
//          value: '点击'
//     }
//   }
// componentDidMount () {
//   setInterval (() => {
//      this.setState({
//         time: new Date().toLocaleTimeString()
//      })
//   }, 1000)
// }
// show = (e) => {
//   let index = e.target.dataset.index
//   console.log(index);
//   this.setState({
//     value: '呵呵'
//   }) 
// }
//   render () {
//     return (
//        <div>
//          <span>{this.state.time}</span>
//          <button data-index="1" onClick={this.show}>{this.state.value}</button>
//        </div>
//     )
//   }
// }
class Clock extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      value: 10
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handler} />
      </div>
    )
  }
  handler = (e) => {
     this.setState({
       value: e.target.value
     })
  }
}
ReactDOM.render(<Clock/>, document.getElementById('root'))
