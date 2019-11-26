import {Calculator} from './../src/calc.js';
describe('Calculator', () =>
{
  test('Should correctly test the age change from age on Earth to age on Mercury', ()=>
  {
    let age = new Calculator(21,80,.24);
    expect(age.findAge()).toEqual(87);
  });

  test('Should correctly test the age change from age on Earth to age on Venus', ()=>
  {
    let age = new Calculator(21,80,.62);
    expect(age.findAge()).toEqual(33);
  });

  test('Should correctly test the age change from age on Earth to age on Mars', ()=>
  {
    let age = new Calculator(21,80,1.88);
    expect(age.findAge()).toEqual(11);
  });

  test('Should correctly test the age change from age on Earth to age on Jupiter', ()=>
  {
    let age = new Calculator(21,80,11.86);
    expect(age.findAge()).toEqual(1);
  });

  test('Should correctly test how long a user has left to live on Mercury year Standards', ()=>
  {
    let age = new Calculator(21,80,.24);
    expect(age.ageExpect()).toEqual(245);
  });

  test('Should correctly test how long somebody has left to live on Venus year Standards', ()=>
  {
    let age = new Calculator(21,80,.62);
    expect(age.ageExpect()).toEqual(95);
  });

  test('Should correctly test how long somebody has left to live on Mars year Standards', ()=>
  {
    let age = new Calculator(21,80,1.88);
    expect(age.ageExpect()).toEqual(31);
  });

  test('Should correctly test how long somebody has left to live on Jupiter year Standards', ()=>
  {
    let age = new Calculator(21,80,11.86);
    expect(age.ageExpect()).toEqual(4);
  });

  test('should return number of Mercury years past expectancy if Earth user enters age thats higher than life expectancy', ()=>
  {
    let age = new Calculator(90,80,.24);
    expect(age.ageExpect()).toEqual(41);
  });

  test('should return number of Venus years past expectancy if Earth user enters age thats higher than life expectancy', ()=>
  {
    let age = new Calculator(90,80,.62);
    expect(age.ageExpect()).toEqual(16);
  });

  test('should return number of Mars years past expectancy if Earth user enters age thats higher than life expectancy', ()=>
  {
    let age = new Calculator(90,80,1.88);
    expect(age.ageExpect()).toEqual(5);
  });

  test('should return number of Jupiter years past expectancy if Earth user enters age thats higher than life expectancy', ()=>
  {
    let age = new Calculator(100,80,11.86);
    expect(age.ageExpect()).toEqual(1);
  });
});
