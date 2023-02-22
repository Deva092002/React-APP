import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 5;
  // const apikey = '5b6eae97b4754db6a6b2392d700581b6';
  const apikey = process.env.REACT_APP_NEWS_API
  
  const[progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
        <Navbar/>  
        <LoadingBar
        height='3px'
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key={"general"} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key={"business"} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key={"entertainment"} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key={"general"} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key={"health"} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key={"science"} pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key={"sports"} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key={"technology"} pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
  export default App;