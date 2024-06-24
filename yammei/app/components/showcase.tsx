'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
    projectIndex: number;
}

const Showcase: React.FC<Props> = ({ projectIndex }) => {

    const containerStyles = 'h-fill w-fill bg-red-500';

    return (
        <div className={containerStyles}>
            <p>hallaur world</p>
            <p>{projectIndex}</p>
        </div>
    );

}

export default Showcase;