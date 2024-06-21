import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

const ContentContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-col my-10 overflow-hidden drop-shadow-lg'>
            <div className='rounded-xl p-5 w-auto h-auto bg-gray-200'>
                { children }
            </div>
        </div>

    );

};

export default ContentContainer;