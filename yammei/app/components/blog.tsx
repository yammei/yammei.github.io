'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ContentContainer from './content_container';

const Blog: React.FC = () => {

    const containerStyles:      string = 'flex flex-col px-5 min-w-full';
    const imageContainerStyles: string = 'h-20 w-20 overflow-hidden';
    const imageStyles:          string = 'rounded-full';
    const titleStyles:          string = 'text-gray-700 text-lg font-semibold my-2';
    const dateStyles:           string = 'text-gray-500 text-sm my-2';
    const contentStyles:        string = 'text-gray-500 w-full my-2';

    const sampleFeed = {
        postID: 1,
        title: 'Developing a new website!',
        date: '01/23/2024',
        content: 'For the content, include a homepage that briefly introduces you and your expertise. A dedicated portfolio section is essential to showcase your projects. Each project entry should include a description, the technologies used, and what you learned from it. Screenshots, demos, and links to repositories or live sites can provide visitors with a deeper understanding of your work.',
        image: '/./imgs/sj-pfp.jpg',
    };

    const handleGetFeed = () => {
        console.log(`Function reached handleGetFeed().`);
    };

    return (
        <ContentContainer>
            <div className={containerStyles} style={{  }}>
                <div className={imageContainerStyles}>
                    <Image className={imageStyles} src={sampleFeed.image} height={100} width={100} alt={`Blog post ID ${sampleFeed.postID} image.`}/>
                </div>
                <p className={titleStyles}>{sampleFeed.title}</p>
                <p className={dateStyles}>{sampleFeed.date}</p>
                <p className={contentStyles}>{sampleFeed.content}</p>
            </div>
        </ContentContainer>

    );
};

export default Blog;