import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './controls.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Controls extends Component {


    render() {
        const { isRunning, start, stop, reset, addLapTime } = this.props;

        return (
            <div className="Controls">
                { !isRunning ?
                    <Button
                        onClick={ start }
                        type='primary'
                        className="Controls__button"
                        ref="startBtn" > Start </Button>
                    : null }

                { isRunning ?
                    <Button
                        onClick={ stop }
                        className="Controls__button"
                        ref="stopBtn" > Stop </Button>
                    : null }

                <Button
                    onClick={ reset }
                    disabled={ isRunning }
                    className="Controls__button"
                    ref="resetBtn" > Reset </Button>

                <Button
                    onClick={ addLapTime }
                    disabled={ !isRunning }
                    className="Controls__button"
                    ref="lapBtn" > Lap Time </Button>
            </div>
        );
    }
}

Controls.proptTypes = {
    isRunning  : PropTypes.bool,
    start      : PropTypes.func.isRequired,
    stop       : PropTypes.func.isRequired,
    reset      : PropTypes.func.isRequired,
    addLapTime : PropTypes.func.isRequired
}

Controls.defaultProps = {
    isRunning : false
};

export default Controls;
