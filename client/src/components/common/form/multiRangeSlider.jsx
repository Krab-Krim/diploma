import React, {useCallback, useEffect, useRef} from "react";
import PropTypes from "prop-types";

const MultiRangeSlider = ({valueRange, minVal, setMinVal, maxVal, setMaxVal, onChange}) => {
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    const min = valueRange[0];
    const max = valueRange[1];

    const getPercent = useCallback(
        (value) => {
            return Math.round(((value - min) / (max - min)) * 100);
        },
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange({min: minVal, max: maxVal});
    }, [minVal, maxVal, onChange]);

    return (
        <div className="container-range">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className="thumb"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className="thumb"
            />
            <div className="slider">
                <div className="slider-track"/>
                <div ref={range} className="slider-range"/>
                <div className="slider-left-value">{minVal}</div>
                <div className="slider-right-value">{maxVal}</div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    valueRange: PropTypes.array,
    minVal: PropTypes.number,
    setMinVal: PropTypes.func,
    maxVal: PropTypes.number,
    setMaxVal: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
};

export default MultiRangeSlider;
