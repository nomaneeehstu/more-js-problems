function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRest10Miles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if(miles <= 20){
        const first10Miles = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const count = restMiles * animalDensitySecond10Miles + first10Miles;
        return count;
    }

    else{
        const first10Miles = 10 * animalDensityFirst10Miles;
        const second10Miles = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const count = restMiles * animalDensityRest10Miles + first10Miles + second10Miles;
        return count;
    }
}

let totallAnimalMeet = animalCount(25);
console.log(totallAnimalMeet);