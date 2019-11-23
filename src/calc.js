export class Calculator
{
  constructor (age, avgAge, planets)
  {
    this.age = age,
    this.avgAge = avgAge,
    this.planets = planets;
  }
  findAge()
  {
    return Math.floor(this.age/this.planets);
  }
  ageExpect()
  {

    if (this.age>this.avgAge)
    {
      let overage = this.age - this.avgAge;
      return Math.floor(overage/this.planets);
    }
    else
    {
      let yearsLeft = this.avgAge - this.age;
      return Math.floor(yearsLeft/this.planets);
    }
  }
}
