
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timer.css';

import timeFormat from '../utils/timeFormat';

class Timer extends Component {

    render() {
        const { time } = this.props;

        return (
            <div className="timer">
            { timeFormat( time ) }
            </div>
    );
    }
}

Timer.propTypes = {
    time : PropTypes.number
}

Timer.defaultProps = {
    time : 0
}

export default Timer;
