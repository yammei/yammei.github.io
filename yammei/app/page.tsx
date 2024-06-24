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
          <Project index={1} title='Mender'/>
          <Project index={2} title="May's Menu"/>
          <Project index={3} title='Stocked'/>
          <Project index={4} title='Nyeow'/>
          <Project index={5} title='re.wear'/>
          <Project index={6} title='Scarab Scanner'/>
        </Portfolio>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;