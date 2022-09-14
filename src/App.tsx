import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
 const {theme, toggleTheme} = useTheme();
  
  return (
      <div className = { classNames('app', {}, [theme]) }>
        <button onClick={ toggleTheme }>THEMS TOGGLE</button>
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
