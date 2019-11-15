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
});
