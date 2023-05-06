import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'



export const App = ()=> {
  const apiKey= process.env.REACT_APP_ApiKey

  const [progress,setProgress]=useState(0);

  // setProgress=(progress)=>{
  //    setState({progress:progress})
  // }

 
    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/"  element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={18} country="in" category="general"/>}></Route>
        <Route exact path="/business"  element={<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={18} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"  element={<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={18} country="in" category="entertainment"/>}></Route>
        <Route exact path="/general"  element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={18}  country="in" category="general"/>}></Route>
        <Route exact path="/health"  element={<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={18} country="in" category="health"/>}></Route>
        <Route exact path="/science"  element={<News  setProgress={setProgress} apiKey={apiKey}key="science" pageSize={18} country="in" category="science"/>}></Route>
        <Route exact path="/sports"  element={<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={18} country="in" category="sports"/>}></Route>
        <Route exact path="/technology"  element={<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={18} country="in" category="technology"/>}></Route>
      </Routes>
     </Router>
     </div>
    )
  }

export default App

