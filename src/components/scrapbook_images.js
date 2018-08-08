import React from 'react';

export default (props) => {
    const {src, style} = props.about;
    console.log(src);
    console.log(props);
    return (
        <img src={src} style={style} className="scrapbook-image" />
    )
}