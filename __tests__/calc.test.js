import {Calculator} from './../src/calc.js';
describe('Calculator', () =>
{
  test('Should correctly test the age change from age on Earth to age on Mercury', ()=>
  {
    var age = new Calculator(21);
    expect(age.mercAge()).toEqual(87);
  });
  test('Should correctly test the age change from age on Earth to age on Venus', ()=>
  {
    var age = new Calculator(21);
    expect(age.venusAge()).toEqual(33);
  });
  test('Should correctly test the age change from age on Earth to age on Mars', ()=>
  {
    var age = new Calculator(21);
    expect(age.marsAge()).toEqual(11);
  });
});
