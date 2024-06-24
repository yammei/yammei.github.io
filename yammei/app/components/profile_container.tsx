import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface Props {
    children: ReactNode;
};

const ProfileContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-col my-10 overflow-hidden drop-shadow'>
            <div className='rounded-t-xl w-auto h-20 bg-gray-200 overflow-y-hidden'>
                <Image className='object-fill h-auto w-full -mt-40' height={1080} width={1920} src='/./imgs/profile-bg.jpg' draggable={false} alt='Background picture of profile section.'/>
            </div>
            <div className='rounded-b-xl pb-5 px-5 w-auto h-auto bg-gray-200'>
                { children }
            </div>
        </div>
    );
};

export default ProfileContainer;