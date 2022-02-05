import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';

import NameCard from './components/NameCard'

import LikesButton from './components/LikesButton';

import DigitalClock from './components/DigitalClock';

import CommentBox from './components/CommentBox';

import CommentList from './components/CommentList';

import ThemeContext from './theme-context';

import ThemedBar from './components/ThemedBar';

const tags = ['tags1', 'tags2'];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/* <NameCard name="testName" number={123456} isHuman tags={tags} /> */}

//       {/* <LikesButton /> */}

//       {/* <DigitalClock /> */}

//       <CommentBox />
//     </div>
//   );
// }

const themes = {
  light: {
    className: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    className: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // comments: ['this is my test']

      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  changeTheme(theme) {
    this.setState({
      theme,
    })
  }

  render() {
    // const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className="App-logo" alt="logo"></img>
            <h1 className='App=title'>Welcome to React</h1>

            <a href='#theme-switcher'
              className='btn btn-light'   
              onClick={() => {this.changeTheme('light')}}       
            >
              浅色主题
            </a>
            <a href='#theme-switcher'
              className='btn btn-secondary'   
              onClick={() => {this.changeTheme('dark')}}          
            >
              深色主题
            </a>
          </header>

          <ThemedBar />

          {/* <CommentList comments={comments} />
          <CommentBox 
            commentsLength={comments.length}
            onAddComment={this.addComment}
          /> */}
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App;

