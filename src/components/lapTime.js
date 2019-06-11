import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './lapTime.css';

import timeFormat from '../utils/timeFormat';

class LapTime extends Component {

    render() {

        const { lap, time } = this.props;

        return (
            <div className="LapTime">
                <span className="LapTime__lap" >{ lap }</span>
                <span className="LapTime__time" >{ timeFormat( time ) }</span>
            </div>
        );
    }
}

LapTime.proptTypes = {
    lap  : PropTypes.number,
    time : PropTypes.number
}

LapTime.defaultProps = {
    lap  : 0,
    time : 0
}
export default LapTime
