import * as d3 from 'd3';
export class AxisScaleLinear {
    private d3Axis: any;
    constructor() {
        this.d3Axis = d3.scaleLinear();
    }
    setDomain(domain:number[]) {
        this.d3Axis.domain(domain).nice();
    }
    setRange(range:number[]) {
        this.d3Axis.range(range);
    }
    getAxis() {
        return this.d3Axis;
    }
};