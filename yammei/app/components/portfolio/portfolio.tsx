"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ContentContainer from '../containers/content_container';
import Showcase from './portfolio_item_content';

interface Props {
    children: ReactNode;
}

const Portfolio: React.FC<Props> = ({ children }) => {

    const [ activeProjectIndex, setActiveProjectIndex ] = useState(0);

    const renderShowcase = () => {
        switch (activeProjectIndex) {
            case 0:
                return '';
            case activeProjectIndex:
                return <Showcase projectIndex={activeProjectIndex} setActiveProjectIndex={setActiveProjectIndex} />;
            defaut:
                return '';
        }
    };

    const portfolioItems = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setActiveProjectIndex });
        }
        return child;
    });

    return (
        <div className='flex flex-col'>
            { renderShowcase() }
            <ContentContainer>
                <motion.div
                    className='grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-0 place-items-center my-5 h-auto slider-content'
                    transition={{ duration: .5, ease: 'easeInOut' }}
                    >
                    { portfolioItems }
                </motion.div>
            </ContentContainer>
        </div>
    );

};

export default Portfolio;