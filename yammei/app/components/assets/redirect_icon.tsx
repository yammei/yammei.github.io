import React from 'react';
import Image from 'next/image';

interface Props {
    size: number,
    mt: number,
    mb: number,
}

export const RedirectIcon: React.FC<Props> = ({ size, mt, mb }) => {
    return (
        <Image
            style={{ marginTop: mt, marginBottom: mb, marginLeft: '4px'}}
            src='/./svgs/redirect.svg'
            alt='Redirection link icon to new page.'
            height={size}
            width={size}
        />

    );
}