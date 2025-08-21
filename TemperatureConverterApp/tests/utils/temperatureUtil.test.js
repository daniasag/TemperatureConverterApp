import TemperatureUtil from '../../utils/temperatureUtil';
import { TemperatureVO } from '../../valueobjects/temperatureVO';
 
describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();
 //PRUEBA UNITARIA
    test('Given Temperature 20C When convert Then 68F (lo que quieres que pruebe el test)n', () => {
      // GIVEN
      let input = new TemperatureVO(20, "CELSIUS");
      
      // WHEN
      let actualOutput = convert(input, "FAHRENHEIT");
 
      // THEN
      let expectedOutput = new TemperatureVO(68, "FAHRENHEIT");
 
      expect(actualOutput.value).toBe(expectedOutput.value);
      expect(actualOutput.unit).toBe(expectedOutput.unit);
    });
});

//2do test
describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();
 //PRUEBA UNITARIA
    test('Given Temperature 68F When convert Then 2OC', () => {
      // GIVEN
      let input = new TemperatureVO(68, "FAHRENHEIT");
      
      // WHEN
      let actualOutput = convert(input, "CELSIUS");
 
      // THEN
      let expectedOutput = new TemperatureVO(20, "CELSIUS");
 
      expect(actualOutput.value).toBe(expectedOutput.value);
      expect(actualOutput.unit).toBe(expectedOutput.unit);
    });
});

//3er test
describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();
 //PRUEBA UNITARIA
    test('Given Temperature 20C When convert Then 2OC', () => {
      // GIVEN
      let input = new TemperatureVO(20, "CELSIUS");
      
      // WHEN
      let actualOutput = convert(input, "CELSIUS");
 
      // THEN
      let expectedOutput = new TemperatureVO(20, "CELSIUS");
 
      expect(actualOutput.value).toBe(expectedOutput.value);
      expect(actualOutput.unit).toBe(expectedOutput.unit);
    });
});