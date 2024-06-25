'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import IndexedNavigation from '../assets/indexed_navigation';

interface Props {
    projectIndex: number;
    setActiveProjectIndex: (index: number) => void;
};

const Showcase: React.FC<Props> = ({ projectIndex, setActiveProjectIndex }) => {

    const [ visibilityStatus, setVisibilityStatus ] = useState('block');

    const sampleData = {
        'section1': {
            'header'        :   'Mental Mender',
            'subheader'     :   'The Web Tool for Therapists.',
            'content'       :   `Mender is an application that streamlines patient assessment, 
                                enabling therapist full control of developing new tests and analyzing data. 
                                Built on a React framework and utilizing single-page architecture (SPA), 
                                Mender's UI system is built for scalibility and maintainibility.

                                `,
            'image'         :   '/./imgs/sample-project-image.png'
        },
    };

    // Parents
    const parentContainerStyles = {
        display: visibilityStatus,
        flexDirection: 'column',
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
    const sectionContainerStyles = {
        height: '100%',
        width: '100%',
        margin: 'auto',
        // backgroundColor: 'cyan'
    };

    // Image
    const imageContainerStyles = {
        height: '50%',
        width: '100%',
        margin: 'auto',
        overflow: 'hidden',
    };
    const imageStyles = {
        width: '100%',
        // backgroundColor: 'red',
        borderRadius: '5px'
    };

    // Text
    const textContainerStyle = {
        height: '35%',
        width: '100%',
        margin: 'auto',
        // backgroundColor: 'red',
    };
    const headerStyles = {
        color: 'rgb(225, 225, 225)',
        fontSize: '20pt',
        fontWeight: 'semibold',
        marginTop: '20px',
    };
    const subHeaderStyles = {
      color: 'rgb(175, 175, 175)',
      fontSize: '10pt',
      fontStyle: 'italic',
      marginBottom: '10px'
    };
    const textStyles = {
        color: 'rgb(200, 200, 200)',
        fontSize: '12pt',
    };

    // Background Darkening
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

            <div className='flex flex-col max-w-mobile p-10 bg-gray-900 rounded-lg drop-shadow' style={containerStyles}>

                <div style={sectionContainerStyles}>
                    <div style={imageContainerStyles}>
                        <Image style={imageStyles} src={sampleData.section1.image} height={1080} width={1920} alt={`Background image for project no. ${projectIndex}.`} draggable={false}/>
                    </div>
                    <div style={textContainerStyle}>
                        <p style={headerStyles}>    {sampleData.section1.header}    </p>
                        <p style={subHeaderStyles}> {sampleData.section1.subheader} </p>
                        <p style={textStyles}>      {sampleData.section1.content}   </p>
                    </div>
                    {/* Grandchild Container */}
                </div>

                <IndexedNavigation/>

            {/* Child Container */}
            </div>
        {/* Parent Container */}
        </div>
    );

}

export default Showcase;