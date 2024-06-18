import React, { useState } from 'react';
import { Inter } from 'next/font/google';

import Profile from './components/profile';
import NavBar from './components/navbar';
import Projects from './components/portfolio';
import Project from './components/project';

const inter = Inter({ subsets: ['latin']});

const Home: React.FC = () => {

  return (
      <div className='w-95p max-w-mobile m-auto'>
        <NavBar/>
        <Profile/>
        <Projects>
          <Project title='Mender' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title="May's Menu" imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Stocked' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Nyeow' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='re.wear' imageSRC='/./imgs/Blueprint Skewed.png'/>
          <Project title='Scarab Scanner' imageSRC='/./imgs/Blueprint Skewed.png'/>
        </Projects>
      </div>
  );
}

export default Home;