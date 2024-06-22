import React, { useState } from 'react';

import Profile from './components/profile';
import NavBar from './components/navbar';
import Portfolio from './components/portfolio';
import Project from './components/project';
import Blog from './components/blog';
import Footer from './components/footer';

const Home: React.FC = () => {

  return (
    <div className='scroll w-full bg-gray-300'>
      <div className='w-95p max-w-mobile m-auto'>
        <NavBar/>
        <Profile/>
        <Portfolio>
          <Project title='Mender' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title="May's Menu" imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Stocked' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Nyeow' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='re.wear' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Scarab Scanner' imageSRC='/./imgs/Blueprint Skewed.png'/>
        </Portfolio>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;