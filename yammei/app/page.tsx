import React, { useState } from 'react';

import Profile from './components/profile';
import NavBar from './components/navbar';
import Projects from './components/portfolio';
import Project from './components/project';
import BlogFeed from './components/blog_feed';

const Home: React.FC = () => {

  return (
    <div className='scroll h-full w-full bg-gray-300'>
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

        <Projects>
          <BlogFeed/>
        </Projects>
      </div>
    </div>
  );
}

export default Home;