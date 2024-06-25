'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import ProfileContainer from '../containers/profile_container';
import { motion } from 'framer-motion';
import { RedirectIcon } from '../assets/redirect_icon';

const Profile: React.FC = () => {

    const [ isStatusHovered, setIsStatusHovered ] = useState(false);
    const [ displayName, setDisplayName ] = useState('Mei Zhang');

    return (
        <div className='-mt-10 pt-20'>
            <ProfileContainer>
                <div className='m-auto mt-10 px-5 min-w-full'>

                    {/* Top Section: Profile Picture */}
                    <div className='relative flex flex-col top-0 h-min w-min -mt-28'>
                         <div className='h-28 w-28 my-5 mx-auto outline outline-4 outline-gray-200 overflow-hidden rounded-full'>
                            <Image className='mt-0 object-fill brightness-200' src='/imgs/museum-pfp.jpg' width={150} height={150} alt='Profile picture of Mei Zhang.' draggable={false}/>
                        </div>
                        <div className='cursor-pointer absolute bottom-3 right-0 h-10 w-10 border-2 border-gray-100 bg-gray-200 rounded-full overflow-hidden drop-shadow-sm z-20'>
                            <motion.p 
                                whileHover={{ filter: 'brightness(1.05)', }}
                                transition={{ duration: .25, ease: 'easeInOut' }}
                                className='text-2xl text-center m-auto mt-1 rounded-full'
                                onMouseEnter={() => setIsStatusHovered(true)}
                                onMouseLeave={() => setIsStatusHovered(false)}
                                >
                                {`💻`}
                            </motion.p>
                        </div>
                        <motion.div
                            whileHover={{filter: 'brightness(1.05)'}}
                            className='absolute bottom-3 h-10 w-fit bg-gray-200 border-2 border-gray-100 rounded-full drop-shadow-sm z-10'
                            style={{ 
                                transition: 'margin-left .5s ease-in-out, opacity .5s ease-in-out',
                                left: '70px',
                                marginLeft: isStatusHovered ? '10px' : '0',
                                opacity: isStatusHovered ? 1 : 0,
                            }}
                            >
                            <p className='text-xs text-gray-500 text-right py-1 pl-2 pr-4 w-max ml-8 mt-2'>Working on dev site framework update.</p>
                        </motion.div>
                    </div>


                    {/* Bottom Section */}
                    <div className='flex flex-row w-100p'>
                        {/* LEFT: Texts */}
                        <div className='my-5'>
                            <motion.p 
                                className='text-4xl text-left font-semibold text-gray-700 w-fit'
                                onMouseEnter={() => setDisplayName('Mei Zhang')}
                                onMouseLeave={() => setDisplayName('Mei Zhang')}
                                >
                                {displayName}
                            </motion.p>
                            <p className='text text-left text-gray-500 mt-2'>
                                Santa Clara-based Software Engineer<br/>
                                <a className='flex flex-row hover:text-gray-700' href='mailto:meizhang.dev@gmail.com'>
                                    meizhang.dev@gmail.com
                                    <RedirectIcon size={10} mt={0} mb={0}/>
                                </a>
                            </p>
                        </div>

                        {/* RIGHT: Icon Links */}
                        <div className='flex flex-row mt-7 ml-auto invert brightness-75'>
                            <div className='cursor-pointer h-fit w-fit mr-3'>
                                <Image className='invert hover:brightness-0' src='/imgs/github-icon.png' height={30} width={30} alt='Link to Github user @yammei.' draggable={false}/>
                            </div>
                            <div className='cursor-pointer h-fit w-fit mr-auto ml-3'>
                                <Image className='invert hover:brightness-0' src='/imgs/linkedin-icon.png' height={30} width={30} alt='Link to Linkedin user Mei Zhang.' draggable={false}/>
                            </div>
                        </div>
                    </div>

                </div>
            </ProfileContainer>
        </div>

    );

};

export default Profile;