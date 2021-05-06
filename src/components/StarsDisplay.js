import React from 'react';
import StarMatch from '../App';
import utils from '../utils';

const StarsDisplay = props => (
    <>
        {utils.range(1, props.count).map(starId => (
            <div key={starID} className = "star" />
        ))}
    </>
);

export default StarsDisplay;