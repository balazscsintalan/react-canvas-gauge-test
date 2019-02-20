import React, { Component } from 'react';
import { RadialGauge, RadialGaugeOptions } from 'canvas-gauges';

interface RadialGaugeWrapperProps {
    options: Partial<RadialGaugeOptions>
}

class RadialGaugeWrapper extends Component<RadialGaugeWrapperProps, {}> {
    private canvasRef: HTMLCanvasElement | null = null;
    private gauge?: RadialGauge;

    componentDidMount() {
        const options = Object.assign({}, this.props.options, {
            renderTo: this.canvasRef
        });
        this.gauge = new RadialGauge(options).draw();
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

export default RadialGaugeWrapper;