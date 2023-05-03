const Thermostat = require('./thermostat');

describe ('thermostat', () => {

  it('returns 20', () => {
    const thermy = new Thermostat;
    expect(thermy.getTemperature()).toBe(20);
  });

  it('returns 22', () => {
    const thermy = new Thermostat;
    thermy.up()
    thermy.up()
    expect(thermy.getTemperature()).toBe(22);
  });

  it('returns 21', () => {
    const thermy = new Thermostat;
    thermy.up()
    thermy.up()
    thermy.down()
    expect(thermy.getTemperature()).toBe(21);
  });

  it('returns PSM is now on, max temperature is 25', () => {
    const thermy = new Thermostat;
    expect(thermy.setPowerSavingMode(true)).toBe('PSM is now on, max temperature is 25');
  });

  it('returns 25 (max reached', () => {
    const thermy = new Thermostat;
    thermy.setPowerSavingMode(true)
    for (let i = 0 ; i < 10 ; i++) {
      thermy.up();
    }
    expect(thermy.getTemperature()).toBe('25 (max reached');
  });
  

})

