'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    projectIndex: number;
    setActiveProjectIndex: (index: number) => void;
};

const Showcase: React.FC<Props> = ({ projectIndex, setActiveProjectIndex }) => {

    const [ visibilityStatus, setVisibilityStatus ] = useState('block');

    const sampleData = {
        'section1': {
            'header'        :   'Mental Mender',
            'subheader'     :   'Tools for Therapists.',
            'content'       :   'An application streamlining patient assessment process.',
            'image'         :   '/./imgs/sample-project-image.png'
        },
    };

    // Element Styles
    const parentContainerStyles = {
        display: visibilityStatus,
        zIndex: 1,
    };
    const containerStyles = {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        height: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 'auto',
        borderRadius: '10px',
        overflow: 'scroll',
        zIndex: 9999,
    };
    const headerStyles = {
        color: 'rgb(225, 225, 225)',
        fontSize: '16pt',
        fontWeight: 'semibold',
    };
    const textStyles = {
        color: 'rgb(200, 200, 200)',
        fontSize: '12pt',
    };
    const backgroundBlurStyles = {
        position: 'fixed',
        alignSelf: 'center',
        top: 0,
        left: 0,
        height: '100vh',
        width: '500vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        opacity: '.75',
        backgroundColor: 'rgb(25, 25, 25)',
        backdropFilter: 'blur(12px)',
        zIndex: 20,
    };
    const getProjectData = () => {
        console.log(`Function Reached: getProjectData().`);
    };
    const toggleVisibility = () => {
        setVisibilityStatus('none');
        setActiveProjectIndex(0);
    };

    return (
        <div style={parentContainerStyles}>
            <div style={backgroundBlurStyles} onClick={toggleVisibility}/>
            <div className='max-w-mobile p-10 bg-gray-900 rounded-lg drop-shadow' style={containerStyles}>
                <Image src={sampleData.section1.image} height={1080} width={1920} alt={`Background image for project no. ${projectIndex}.`} draggable={false}/>
                <p style={headerStyles}>{sampleData.section1.header}</p>
                <p style={textStyles}>{sampleData.section1.subheader}</p>
                <p style={textStyles}>{sampleData.section1.content}</p>
            </div>
        </div>
    );

}

export default Showcase;