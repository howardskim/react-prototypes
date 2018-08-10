import React from 'react';

export default (props) => {
    const {info} = props;
    console.log(info)
    return (
        <div className="center">
            <img src={info['im:image'][2].label} />
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
            <button className="btn btn-primary marginBottom">View Itunes Preview</button>
        </div>
    )
}
