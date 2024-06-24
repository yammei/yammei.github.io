'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
    projectIndex: number;
}

const Showcase: React.FC<Props> = ({ projectIndex }) => {

    const containerStyles = {
        height: 'fit-content',
        width: '100%',
        backgroundColor: '#E5E7EB',
        border:
    }
    const textStyles = {
        color: 'rgb(50, 50, 50)',
        fontSize: '12pt',
    };

    return (
        <div style={containerStyles}>
            <p style={textStyles}>hallaur world</p>
            <p style={textStyles}>{projectIndex}</p>
        </div>
    );

}

export default Showcase;