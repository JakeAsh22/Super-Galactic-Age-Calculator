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
    
  }
}
