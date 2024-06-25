import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

const ContentContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className='flex flex-col w-auto h-auto my-4 p-5 bg-gray-200 rounded-xl overflow-hidden drop-shadow'>
            { children }
        </div>

    );

};

export default ContentContainer;