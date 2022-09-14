import React, { Suspense } from 'react'
import { Counter } from './components/Counter';
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';


const App = () => {
  return (
      <div className='app'>
        <Link to={"/"}>to Main Page</Link>
        <Link to={"/about"}>to About page</Link>
        <Suspense  fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={ <MainPageAsync/> }/>
            <Route path={'/about'} element={ <AboutPageAsync/> }/>
          </Routes>
        </Suspense>        
      </div>
    
  )
}

export default App
