import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface Props {
    children: ReactNode;
};

const ProfileContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-col my-10 overflow-hidden drop-shadow-lg'>
            <div className='rounded-t-xl w-auto h-20 bg-gray-200 overflow-y-hidden'>
                <Image className='-mt-64 bg-cyan-500' height={500} width={600} src='/./imgs/Blueprint Skewed.png' draggable={false}/>
            </div>
            <div className='rounded-b-xl pb-5 px-5 w-auto h-auto bg-gray-200'>
                { children }
            </div>
        </div>

    );

};

export default ProfileContainer;