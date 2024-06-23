'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContentContainer from './content_container';

const Blog: React.FC = () => {

    // Container Styles
    const containerStyles:          string = 'flex flex-col px-5 py-5 min-w-full';
    const imageContainerStyles:     string = 'flex w-fit overflow-hidden';
    const headerContainerStyles:    string = 'flex flex-row h-fit w-auto';
    const subheaderContainerStyles: string = 'flex flex-col w-3/4 my-auto ml-10 mr-auto pt-4 pb-3 px-5 bg-gray-300 rounded-lg drop-shadow-sm';
    const speechContainerStyles:    string = 'absolute h-5 w-5 bg-gray-300 -ml-7 mt-5 rotate-45 drop-shadow-sm';
    const redirectContainerStyles:  string = 'cursor-pointer flex flex-col w-fit mt-4 mb-2 mx-auto bg-blue-600 rounded-full drop-shadow-sm';

    // Content Styles
    const imageStyles:      string = 'object-none h-20 w-20 mx-auto rounded-full';
    const titleStyles:      string = 'text-gray-700 text-2xl font-semibold my-2';
    const postIDStyles:     string = 'text-gray-500 text-xs text-left';
    const contentStyles:    string = 'text-gray-600 my-2';
    const redirectStyles:   string = 'text-gray-200 text-xs my-2 mx-auto px-5';

    // Sample Data
    const sampleFeed = {
        postID: 1,
        title: 'Developing a New Website!',
        date: '01/23/2024',
        content: 'Os iusti meditabitur sapientiam, Et lingua eius loquetur iudicium. Beatus vir qui suffert tentationem, Quoniam cum probatus fuerit accipiet coronam vitae. Kyrie, fons bonitatis Kyrie, ignis divine, eleison O quam sancta, quam serena quam benigna, quam amoena esse Virgo creditur O quam sancta, quam serena, quam benigna, quam amoena O castitatis lilium.',
        image: '/./imgs/sj-pfp.jpg',
    };

    const handleGetFeed = () => {
        console.log(`Function reached handleGetFeed().`);
    };

    return (
        <ContentContainer>
            <div className={containerStyles} style={{  }}>

                <div className={headerContainerStyles}>
                    <div className={imageContainerStyles}>
                        <Image className={imageStyles} src={sampleFeed.image} height={100} width={100} alt={`Blog post ID ${sampleFeed.postID} image.`} draggable={false}/>
                    </div>
                    <div className={subheaderContainerStyles}>
                        <div className={speechContainerStyles}/>
                        <p className={titleStyles}>{sampleFeed.title}</p>
                        <p className={postIDStyles}>{`Posted ${sampleFeed.date}`}</p>
                        <p className={contentStyles}>{sampleFeed.content}</p>
                        <motion.div whileHover={{ filter: 'brightness(1.1)'}} transition={{ duration: 0, ease: 'easeInOut' }} className={redirectContainerStyles}>
                            <motion.p className={redirectStyles}>{`View Blog`}</motion.p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </ContentContainer>

    );
};

export default Blog;