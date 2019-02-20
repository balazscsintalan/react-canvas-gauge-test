import React, { Component } from 'react';
import LinearGaugeWrapper from './LinearGaugeWrapper';
import { LinearGaugeOptions } from 'canvas-gauges';

class LinearGaugeTest extends Component {
    private options: Partial<LinearGaugeOptions> = {
        width: 300,
        height: 600,
        value: 50
    };

    render() {
        return (
            <div>
                <LinearGaugeWrapper options={this.options}/>
            </div>
        );
    }
}

export default LinearGaugeTest;
