"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ContentContainer from './content_container';
import Showcase from './showcase';

interface Props {
    children: ReactNode;
}

const Portfolio: React.FC<Props> = ({ children }) => {

    const [ activeProjectIndex, setActiveProjectIndex ] = useState(0);

    const renderShowcase = () => {
        switch (activeProjectIndex) {
            case activeProjectIndex:
                return <Showcase projectIndex={activeProjectIndex}/>;
            defaut:
                return '';
        }
    };

    const newChild = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setActiveProjectIndex });
        }
        return child;
    });

    return (
        <ContentContainer>
            <motion.div
                className='grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-0 place-items-center my-5 h-auto slider-content'
                transition={{ duration: .5, ease: 'easeInOut' }}
                >
                { newChild }
            </motion.div>
            {renderShowcase()}

        </ContentContainer>
    );

};

export default Portfolio;