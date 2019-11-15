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
    const merc = .24;
    if (this.age>ageExpect)
    {
      let overage = this.age - ageExpect;
      return Math.floor(overage/merc);
    }
    else
    {
      let yearsLeft = ageExpect - this.age;
      return Math.floor(yearsLeft/merc);
    }
  }
  venusAgeExpect(ageExpect)
  {
    const venus = .62;
    if (this.age>ageExpect)
    {
      let overage = this.age - ageExpect;
      return Math.floor(overage/venus);
    }
    else
    {
      let yearsLeft = ageExpect - this.age;
      return Math.floor(yearsLeft/venus);
    }

  }
  marsAgeExpect(ageExpect)
  {
    const mars = 1.88;
    if (this.age>ageExpect)
    {
      let overage = this.age - ageExpect;
      return Math.floor(overage/mars);
    }
    else
    {
      let yearsLeft = ageExpect - this.age;
      return Math.floor(yearsLeft/mars);
    }


  }
  jupiterAgeExpect(ageExpect)
  {
    const jupiter = 11.86;

    if (this.age>ageExpect)
    {
      let overage = this.age - ageExpect;
      return Math.floor(overage/jupiter);
    }
    else
    {
      let yearsLeft = ageExpect - this.age;
      return Math.floor(yearsLeft/jupiter);
    }

  }
}
