import React from 'react';

class Welcome extends React.Component{
  render() {

    const todoList = ['str1', 'str2']

    const test = <h1> Hello RRR </h1>
    console.log(test)

    return (
      <div>
        <h1> Hello React </h1>
        <ul>
          {
            todoList.map(item => 
              <li>{ item }</li>
            )
          }
        </ul>
      </div>
    )
    
  }
}

export default Welcome
