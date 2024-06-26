'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BackwardIcon, ForwardIcon } from './navigation_icons';
import { motion } from 'framer-motion';

interface Props {
    setSyncedParentIndex: (index: number) => void;
}

const IndexedNavigation: React.FC<Props> = ({ setSyncedParentIndex }) => {

    const indices: number[] = [1, 2, 3];
    const [ isCurrentIndex, setIsCurrentIndex ] = useState(1);

    const IndexCircleContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        marginTop: '-20px',
    };
    const buttonContainerStyles = {
        display: 'flex',
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        margin: '0px 10px',
        // backgroundColor: 'rgb(100, 100, 100)',
        border: '1px solid rgb(100, 100, 100)',
        borderRadius: '999px',
    }
    const indexCircleStyles = {
        height: '10px',
        width: '10px',
        margin: 'auto 5px',
        borderRadius: '999px',
        transition: 'scale .25s ease-in-out, background-color .25s ease-in-out',
    };
    const indexDisplayTextStyles = {
        userSelect: 'none',
        position: 'absolute',
        color: 'rgb(150, 150, 150)',
        fontSize: '11pt',
        right: '0',
        marginTop: '2px',
        marginRight: '10%'
    }

    const conditionalIndexCircleStyles = (index: number) => {
        return {
            backgroundColor: isCurrentIndex === index ? 'rgb(200, 200, 200)' : 'rgb(100, 100, 100)',
            scale: isCurrentIndex === index ? 1.1 : 1,
        }
    };

    // Function for switching indices and looping around the indices map.
    const handleButtonClick = (mode: string): void => {
        console.log(`[Mode: ${mode}] Switching index from ${isCurrentIndex}...`);
        switch (mode) {
            case 'prev':
                const conditionedPrevIndex = (isCurrentIndex === indices[0] ? indices[indices.length-1] : isCurrentIndex-1);
                setIsCurrentIndex(conditionedPrevIndex);
                setSyncedParentIndex(conditionedPrevIndex);
                console.log(`...to ${conditionedPrevIndex}.`);
                return;
            case 'next':
                const conditionedNextIndex = (isCurrentIndex === indices[indices.length-1] ? indices[0] : isCurrentIndex+1)
                setIsCurrentIndex(conditionedNextIndex);
                setSyncedParentIndex(conditionedNextIndex);
                console.log(`...to ${conditionedNextIndex}.`);
                return;
            default:
                console.log(`Error switching indices. Index remains ${isCurrentIndex}.`);
                return;
        }
    };

    return (
        <div style={IndexCircleContainerStyles}>

            <motion.div
                style={buttonContainerStyles}
                onClick={() => handleButtonClick('prev')}
                whileHover={{ filter: 'brightness(1.75)' }}
                transition={{ duration: .25, ease: 'easeInOut' }}
                >
                <BackwardIcon size={8}/>
            </motion.div>

            {[1, 2, 3].map((index) => (
                <div
                    key={index}
                    style={{ ...indexCircleStyles, ...conditionalIndexCircleStyles(index) }}
                />
            ))}

            <motion.div
                style={buttonContainerStyles}
                onClick={() => handleButtonClick('next')}
                whileHover={{ filter: 'brightness(1.75)' }}
                transition={{ duration: .25, ease: 'easeInOut' }}
                >
                <ForwardIcon size={8}/>
            </motion.div>

            <p style={indexDisplayTextStyles}>{isCurrentIndex}</p>

        </div>
    );

};

export default IndexedNavigation;