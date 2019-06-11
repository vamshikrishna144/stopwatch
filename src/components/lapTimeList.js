import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './lapTimeList.css';

import LapTime from './lapTime';

class LapTimeList extends Component {


    render() {

        const { timeList } = this.props;

        return (
            <div className="LapTimeList">
                <div className="LapTimeList__listwrap">

                    <div className="LapTimeList__headers">
                        <span> Lap </span> <span> Time </span>
                    </div>

                    <ul className="LapTimeList__list" >
                        {
                            timeList.map( (time, index) => {
                                return (
                                    <li key={ index }>
                                        <LapTime lap={ index + 1 } time={ time }  />
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

LapTimeList.proptTypes = {
    timeList : PropTypes.array
};

LapTimeList.defaultProps = {
    timeList : []
};


export default LapTimeList;
