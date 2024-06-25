import React from 'react';
import Image from 'next/image';

interface Props {
    size: number,
}

export const BackwardIcon: React.FC<Props> = ({ size }) => {
    return (
        <Image
        style={{ margin: 'auto', filter: 'contrast(.25)'}}
            src='/./svgs/backward-icon.svg'
            alt='Redirection link icon to new page.'
            height={size}
            width={size}
            draggable={false}
        />

    );
}

export const ForwardIcon: React.FC<Props> = ({ size }) => {
    return (
        <Image
            style={{ margin: 'auto', filter: 'contrast(.25)'}}
            src='/./svgs/forward-icon.svg'
            alt='Redirection link icon to new page.'
            height={size}
            width={size}
            draggable={false}
        />

    );
}