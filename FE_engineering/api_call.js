// To run locally
// $ npm install request && node FoodTruckFinder.js

// IIFE for scope safty
(() => {
    const request = require('request');
    const readline = require('readline');
    const API_ENDPOINT = 'https://data.sfgov.org/resource/jjew-r69b.json';

    const callback = (err, response, body) => {
        if (err) {
            console.error(err.toString());
        }

        if (response.statusMessage !== 'OK' || response.statusCode !== 200) {
            console.error('Failed to fetch data from the API endpoint.');
        }

        if (!body) {
            console.error('The reponse body does not exisit.');
        }

        main(body);
    };

    // run the main program
    console.log('Running the program ...');
    console.log('Making remote API call ...');
    request(API_ENDPOINT, callback);

    const main = (body) => {
        const truckList = JSON.parse(body);

        const openTrucksKeys = truckList.filter(x => isFoodTruckOpen(x))
                                        .map(x => {
                                            return {
                                                NAME: x.applicant,
                                                ADDRESS: x.location
                                            }
                                        });

        // de-duplicate
        const uniqueOpenTrucks = new Set(openTrucksKeys);

        const result = [...uniqueOpenTrucks].sort((a, b) => a.NAME > b.NAME ? 1 : -1);

        displayResult(result);
    };

    const displayResult = async (result) => {
        if (!result || !result.length) {
            console.log('The result list is empty');
            return;
        }

        if (result.length <= 10) {
            console.log(result);
            return;
        }

        let batch = [], count = 0;
        for (const item of result) {
            if (count < 10) {
                batch.push(item);
                count++;
            } else {
                console.table(batch);
                await pressToContinue();
                batch = [];
                count = 0;
            }
        }

        // print whatever that is left
        console.table(batch);
    };

    const pressToContinue = () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise(resolve => rl.question('Press anything to continue ...', ans => {
            rl.close();
            resolve(ans);
        }));
    };

    const getCurrentDay = () => {
        return new Date().getDay().toString();
    };

    const getCurrentHour = () => {
        return new Date().getHours();
    };

    const getCurrentMin = () => {
        return new Date().getMinutes();
    };

    const convertTimeTo24 = (time) => {
        return time.includes('PM') ? parseInt(time) + 12 : parseInt(time);
    };

    const isFoodTruckOpen = (foodTruck) => {
        if (!foodTruck) return false;

        if (getCurrentDay() !== foodTruck.dayorder) return false;

        const currentHour = getCurrentHour();
        const currentMin = getCurrentMin();
        const start = convertTimeTo24(foodTruck.starttime);
        const end = convertTimeTo24(foodTruck.endtime);

        if (currentHour < start) return false;

        if (currentHour > end) return false;

        if (currentMin === end && currentMin > 0) return false;

        return true;
    };

    // TODO: remove when done testing
    const isFoodTruckOpen2 = (foodTruck) => {
        if (!foodTruck) return false;

        const currentHour = 7;
        const currentMin = 34;
        const start = convertTimeTo24(foodTruck.starttime);
        const end = convertTimeTo24(foodTruck.endtime);

        if (currentHour < start) return false;

        if (currentHour > end) return false;

        if (currentMin === end && currentMin > 0) return false;

        return true;
    };
})();
