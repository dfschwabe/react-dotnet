import React from 'react';
import { useSelector } from 'react-redux'

export function WeatherTomorrow() {
    const value = useSelector((state) => state.value ? state.value[1].temperatureF : 'not sure');

    return (
        <div>tomorrow is gonna be {value}F</div>
    );

}