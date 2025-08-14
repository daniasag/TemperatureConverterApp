//los hooks van a ser para comunicar mi UI pantalla con mis funcionalidades con lógica que están en otras clases
//toda la lógica es POO
//controller

import { useState } from 'react';
import TemperatureUtil from '../utils/temperatureUtil';
import { TemperatureVO } from '../valueobjects/temperatureVO';

const useTemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const { convert } = TemperatureUtil(); //convert es una función que quiero usar de tempUtil
    
    function convertTemperature() {
        let originalCelsius = new TemperatureVO(celsius, 'CELSIUS')
        let convertedFahrenheit = convert(originalCelsius, 'FAHRENHEIT');
        setFahrenheit(convertedFahrenheit.value);
    }

    return { celsius, setCelsius, fahrenheit, setFahrenheit, convertTemperature }
}

export default useTemperatureConverter;
