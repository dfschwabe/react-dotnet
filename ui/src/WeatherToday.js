import React from 'react';
import { useSelector } from 'react-redux'

export function WeatherToday() {
    const value = useSelector((state) => state.value ? state.value[0].temperatureF : 'not sure');

    return (
        <div>today is {value}F</div>
    );

}

