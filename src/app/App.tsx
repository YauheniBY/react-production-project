import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';



const App = () => {
 const {theme, toggleTheme} = useTheme();
  
  return (
      <div className = { classNames('app', {}, [theme]) }>
        <button onClick={ toggleTheme }>THEMS TOGGLE</button>
        <Link to={"/"}>to Main Page</Link>
        <Link to={"/about"}>to About page</Link>
        <Suspense  fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={ <MainPage/> }/>
            <Route path={'/about'} element={ <AboutPage/> }/>
          </Routes>
        </Suspense>        
      </div>
    
  )
}

export default App
