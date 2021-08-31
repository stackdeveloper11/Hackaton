import React from 'react';

const Iframe = ({ source }) => {
    if (!source) {
        return <div>Yükleniyor...</div>;
    }
    const src = source;     
    return (
                <iframe src={src} style={{width:100+"%",height:500 + "px"}}></iframe>
    );
};

export default Iframe;