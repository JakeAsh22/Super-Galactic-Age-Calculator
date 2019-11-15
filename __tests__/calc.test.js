import {Calculator} from './../src/calc.js';
describe('Calculator', () =>
{
  test('Should correctly test the age change from age on Earth to age on Mercury', ()=>
  {
    let age = new Calculator(21);
    expect(age.mercAge()).toEqual(87);
  });

  test('Should correctly test the age change from age on Earth to age on Venus', ()=>
  {
    let age = new Calculator(21);
    expect(age.venusAge()).toEqual(33);
  });

  test('Should correctly test the age change from age on Earth to age on Mars', ()=>
  {
    let age = new Calculator(21);
    expect(age.marsAge()).toEqual(11);
  });

  test('Should correctly test the age change from age on Earth to age on Jupiter', ()=>
  {
    let age = new Calculator(21);
    expect(age.jupiterAge()).toEqual(1);
  });

  test('Should correctly test how long somebody has left on Mercury', ()=>
  {
    let age = new Calculator(21);
    const ageExpect = 80;
    expect(age.mercAgeExpect(ageExpect)).toEqual(245);
  });

  test('Should correctly test how long somebody has left on Venus', ()=>
  {
    let age = new Calculator(21);
    const ageExpect = 80;
    expect(age.venusAgeExpect(ageExpect)).toEqual(95);
  });

  test('Should correctly test how long somebody has left on Mars', ()=>
  {
    let age = new Calculator(21);
    const ageExpect = 80;
    expect(age.marsAgeExpect(ageExpect)).toEqual(31);
  });

  test('Should correctly test how long somebody has left on Jupiter', ()=>
  {
    let age = new Calculator(21);
    const ageExpect = 80;
    expect(age.jupiterAgeExpect(ageExpect)).toEqual(4);
  });

  test('Should correctly test how much older the person is than expected on Mercury', ()=>
  {
    let age = new Calculator(90);
    const ageExpect = 80;
    expect(age.mercAgeExpect(ageExpect)).toEqual(41);
  });

  test('Should correctly test how much older the person is than expected on Venus', ()=>
  {
    let age = new Calculator(90);
    const ageExpect = 80;
    expect(age.venusAgeExpect(ageExpect)).toEqual(16);
  });

  test('Should correctly test how much older the person is than expected on Mars', ()=>
  {
    let age = new Calculator(90);
    const ageExpect = 80;
    expect(age.marsAgeExpect(ageExpect)).toEqual(5);
  });

  test('Should correctly test how much older the person is than expected on Jupiter', ()=>
  {
    let age = new Calculator(100);
    const ageExpect = 80;
    expect(age.jupiterAgeExpect(ageExpect)).toEqual(1);
  });
});
