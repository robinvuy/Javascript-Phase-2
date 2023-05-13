class Thermostat {
  constructor() {
    this.temperature = 20;
  }


  // wasssupppp

  getTemperature() {
      if (this.setPowerSavingMode === true && this.temperature > 25) {
        this.temperature = 25;
        return '25 (max reached)';
      } else {
        return this.temperature
      }
  }

  up() {
    this.temperature += 1;
    return this.temperature;
  }

  down() {
    this.temperature -= 1;
    return this.temperature;
  }


  setPowerSavingMode = (active) => {
    if (active === true) {
      
      if (this.temperature > 25) {
        this.temperature = 25
      }
  

    
      
      // this.temperature <= 25;
      return 'PSM is now on, max temperature is 25';
    } else if (active === false) {

      return 'PSM is now off, max temperature is no more 25';
      
    }
    
    
  }
}



module.exports = Thermostat;