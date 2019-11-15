import {Calculator} from './../src/clac.js';
describe('Calculator', () =>
{
  test('Should correctly test the age change from age on Earth to age on Mercury', ()=>
  {
    var age = new Calculator(21);
    expect(age.mercAge()).toEqual(87);
  });
});
