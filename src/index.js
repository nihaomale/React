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
let status = '正常'
// let elemnet = (
//   h1        
// )
let element = (
  <div>
    {/* <h1>{1 + 1}</h1> */}
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAADSCAYAAACBxlNzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBQzM0RTA5NzcxMDExRTRCRTRFQTI5QkI2QTdENjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBQzM0RTBBNzcxMDExRTRCRTRFQTI5QkI2QTdENjMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEFDMzRFMDc3NzEwMTFFNEJFNEVBMjlCQjZBN0Q2MzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEFDMzRFMDg3NzEwMTFFNEJFNEVBMjlCQjZBN0Q2MzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wMmE1AAAwCklEQVR42u2dB3xU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" alt=""/>
    <h1 className="bgcolor">{status === '发烧' ?  <button>隔离</button>  : '放假'}</h1>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))