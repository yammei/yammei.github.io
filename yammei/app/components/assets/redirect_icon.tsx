import React from 'react';

interface Props {
    size: number,
    mt: number,
    mb: number,
}

export const RedirectIcon: React.FC<Props> = ({ size, mt, mb }) => {
    return (
        <img
            style={{ marginTop: mt, marginBottom: mb, marginLeft: '4px'}} 
            src='/./svgs/redirect.svg' 
            alt='Redirection link icon to new page.'
            height={size}
            width={size}
        />

    );
}