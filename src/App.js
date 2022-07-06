import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import ReactDOM from "react-dom/client";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API
  // 

state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({progress:progress})
}
  
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* stop  */}
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category='general' />}>
            </Route>

            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} category='science' />}>
            </Route>

            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category='entertainment' />}>
            </Route>

            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} category='health' />}>
            </Route>

            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category='sports' />}>
            </Route>

            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} category='technology' />}>
            </Route>

            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category='business' />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div >
    )
  }
}

