export class Calculator
{
  constructor (age, avgAge)
  {
    this.age = age,
    this.avgAge = avgAge
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
  mercAgeExpect()
  {
    const merc = .24;
    if (this.age>this.avgAge)
    {
      let overage = this.age - this.avgAge;
      return Math.floor(overage/merc);
    }
    else
    {
      let yearsLeft = this.avgAge - this.age;
      return Math.floor(yearsLeft/merc);
    }
  }
  venusAgeExpect()
  {
    const venus = .62;
    if (this.age>this.avgAge)
    {
      let overage = this.age - this.avgAge;
      return Math.floor(overage/venus);
    }
    else
    {
      let yearsLeft = this.avgAge - this.age;
      return Math.floor(yearsLeft/venus);
    }

  }
  marsAgeExpect()
  {
    const mars = 1.88;
    if (this.age>this.avgAge)
    {
      let overage = this.age - this.avgAge;
      return Math.floor(overage/mars);
    }
    else
    {
      let yearsLeft = this.avgAge - this.age;
      return Math.floor(yearsLeft/mars);
    }


  }
  jupiterAgeExpect()
  {
    const jupiter = 11.86;

    if (this.age>this.avgAge)
    {
      let overage = this.age - this.avgAge;
      return Math.floor(overage/jupiter);
    }
    else
    {
      let yearsLeft = this.avgAge - this.age;
      return Math.floor(yearsLeft/jupiter);
    }

  }
}
