'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RedirectIcon } from '../assets/redirect_icon';

const Footer: React.FC = () => {

    // Container stylings.
    const containerStyles:          string = 'flex flex-col h-50 w-full mt-10 pt-10 pb-10 px-12 bg-gray-200 rounded-t-xl drop-shadow';
    const siteInfoContainerStyles:  string = 'flex mt-20 mb-3';
    const linkContainerStyles:      string = 'flex flex-row';

    // Element stylings.
    const siteInfoStyles:       string = 'flex flex-row text-xs text-gray-500';
    const siteInfoLinksStyles:  string = 'hover:text-gray-700'
    const categoryStyles:       string = 'font-semibold text-gray-700 my-2';
    const linkStyles:           string = 'text-sm text-gray-500 hover:text-gray-700 my-1 -ml-3 pl-2 border-l-4 border-gray-200';
    const columnStyles:         string = 'flex flex-col w-24 mr-10';
    const linkHoverStyles:      string = '#ffcc00';

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
                        Professional
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Dev Blog
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href=''
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        Resume
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
                        <p className='flex flex-row'>
                            Github 
                            <RedirectIcon size={8} mt={0} mb={3}/>
                        </p>
                    </motion.a>
                    <motion.a
                        className={linkStyles}
                        href='https://linkedin.com/in/mei-zh'
                        whileHover={{ borderColor: linkHoverStyles }}
                        transition={{ duration: .25, ease: 'easeInOut' }}
                        target='_blank'>
                        <p className='flex flex-row'>
                            Linkedin 
                            <RedirectIcon size={8} mt={0} mb={3}/>
                        </p>
                    </motion.a>
                </div>

            </div>

            <div className={siteInfoContainerStyles}>
                <p className={siteInfoStyles}>
                    <a className={siteInfoLinksStyles} href=''>Privacy Policy</a>
                    <span className='mx-2' style={{ userSelect: 'none' }}>{'|'}</span>
                    <a className={siteInfoLinksStyles} href=''>Terms of Use </a>
                    <span className='mx-2' style={{ userSelect: 'none' }}>{'|'}</span>
                    <a className={siteInfoLinksStyles} href=''>Site Map </a>
                </p>
            </div>

        </div>
    );

};

export default Footer;