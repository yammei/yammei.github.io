import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProfileContainer from './profile_container';

const Profile: React.FC = () => {

    return (
        <div className='-mt-10 pt-20'>
            <ProfileContainer>
                <div className='m-auto mt-10 px-5 min-w-full'>

                    {/* Top Section: Profile Picture */}
                    <div className='h-28 w-28 my-5 -mt-24 mx-auto outline outline-4 outline-gray-200 overflow-hidden rounded-full'>
                        <Image className='-mt-5 object-none brightness-100' src='/imgs/sj-pfp.jpg' width={150} height={150} alt='Profile picture of Mei Zhang.' draggable={false}/>
                    </div>

                    {/* Bottom Section */}
                    <div className='flex flex-row w-100p'>
                        {/* LEFT: Texts */}
                        <div className='my-5'>
                            <p className='text-4xl text-left font-semibold text-gray-700'>
                                Mei Zhang 🍻
                            </p>
                            <p className='text text-left text-gray-500 mt-2'>
                                Santa Clara-based Software Engineer.<br/>
                                meizhang.dev@gmail.com
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