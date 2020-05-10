import React from 'react';
 const app = class Child extends React.Component{
     render() {
        console.log(this);
        let weather = this.props.weather
        return (
          <div>
            是否出门
            <h1>{weather==='晴天' ? '出门' : '不出门'}</h1>
          </div>
        )
     }
 }
  export default app