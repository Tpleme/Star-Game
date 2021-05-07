import React from 'react'
import utils from '../utils.js'

const PlayNumber = props => (
    <button
        className="number"
        style={{backgroundColor: utils.colors[props.status]}}
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
);

export default PlayNumber;