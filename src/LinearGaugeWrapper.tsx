import React, { Component } from 'react';
import { LinearGauge, LinearGaugeOptions } from 'canvas-gauges';

interface LinearGaugeWrapperProps {
    options: Partial<LinearGaugeOptions>
}

class LinearGaugeWrapper extends Component<LinearGaugeWrapperProps, {}> {
    private canvasRef: HTMLCanvasElement | null = null;
    private gauge?: LinearGauge;

    componentDidMount() {
        const options = Object.assign({}, this.props.options, {
            renderTo: this.canvasRef
        });
        this.gauge = new LinearGauge(options).draw();
    }

    componentDidUpdate() {
        if (!this.gauge) {
            return;
        }

        // @ts-ignore renderTo set in componentDidMount
        this.gauge.update(this.props.options);
    }

    render() {
        return (
            <canvas ref={(canvas) => {
                this.canvasRef = canvas;
            }}/>
        );
    }
}

export default LinearGaugeWrapper;