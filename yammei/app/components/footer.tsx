'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {

    // Element stylings.
    const containerStyles: string = 'flex flex-col h-50 w-full pt-10 pb-10 px-5 bg-gray-200 rounded-t-xl drop-shadow';
    const linkContainerStyles: string = 'flex flex-row mx-auto';
    const categoryStyles: string = 'font-semibold text-gray-700 my-2';
    const linkStyles: string = 'text-sm text-gray-500 hover:text-gray-700 my-1 -ml-3 pl-2 border-l-4 border-gray-200';
    const columnStyles: string = 'flex flex-col w-24 mx-10';
    const linkHoverStyles: string = '#ffcc00';

    return (
        <div className={containerStyles}>

            <div className={linkContainerStyles}>

                <div className={columnStyles}>
                    <p className={categoryStyles}>About</p>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Personal
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Career
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Dev Blog
                    </motion.a>
                </div>

                <div className={columnStyles}>
                    <p className={categoryStyles}>Projects</p>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Mender
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        {"May's Menu"}
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        re.wear
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Scarab Scan
                    </motion.a>
                </div>

                <div className={columnStyles}>
                    <p className={categoryStyles}>Profiles</p>
                    <motion.a
                        className={linkStyles}
                        href='https://github.com/yammei'
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Github
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href='https://linkedin.com/in/mei-zh'
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Linkedin
                    </motion.a>
                </div>

            </div>

        </div>
    );

};

export default Footer;