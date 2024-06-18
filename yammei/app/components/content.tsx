import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

const Content: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-col my-10 overflow-hidden'>
            <div className='rounded-t-xl pt-5 px-5 w-auto h-14 bg-gradient-to-r from-cyan-500 to-blue-600'>

            </div>
            <div className='rounded-b-xl pb-5 px-5 w-auto h-auto bg-black-light'>
                { children }
            </div>
        </div>

    );

};

export default Content;