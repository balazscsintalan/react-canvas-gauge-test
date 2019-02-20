import React, { Component } from 'react';
import { RadialGaugeOptions } from 'canvas-gauges';
import RadialGaugeWrapper from './RadialGaugeWrapper';

class RadialGaugeTest extends Component {
    private options: Partial<RadialGaugeOptions> = {
        width: 300,
        height: 300,
        units: "HUF",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        valueBox: false,
        maxValue: 400,
        majorTicks: [
            101, 151, 251
        ],
        exactTicks: true,
        minorTicks: 0,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 100,
                "color": "red"
            },
            {
                "from": 101,
                "to": 150,
                "color": "green"
            },
            {
                "from": 151,
                "to": 250,
                "color": "orange"
            },
            {
                "from": 251,
                "to": 295,
                "color": "blue"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        value: 240
    };

    render() {
        return (
            <div>
                <RadialGaugeWrapper options={this.options}/>
            </div>
        );
    }
}

export default RadialGaugeTest;
