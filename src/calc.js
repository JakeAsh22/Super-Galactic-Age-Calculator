export class Calculator
{
  constructor (age)
  {
    this.age = age;
  }
  mercAge()
  {
    const merc = .24;
    return Math.floor(this.age/merc);
  }
  venusAge()
  {
    const venus = .62;
    return Math.floor(this.age/venus);
  }
  marsAge()
  {
    const mars = 1.88;
    return Math.floor(this.age/mars);
  }
  jupiterAge()
  {
    const jupiter = 11.86;
    return Math.floor(this.age/jupiter);
  }
  mercAgeExpect(ageExpect)
  {
    let yearsLeft = ageExpect - this.age;
    const merc = .24;
    return Math.floor(yearsLeft/merc);
  }
}
