// IIFE for scope safty
(() => {
    const request = require('request');
    const readline = require('readline');
    const API_ENDPOINT = 'https://data.sfgov.org/resource/jjew-r69b.json';

    const callback = (err, response, body) => {
        if (err)
            console.error(err.toString());

        if (response.statusMessage !== 'OK' || response.statusCode !== 200)
            console.error('Failed to fetch data from the API endpoint.');

        if (!body)
            console.error('The reponse body does not exisit.');

        processBody(body);
    };

    const printCurrentTime = () => {
        const dict = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        }

        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();

        console.log(`Current time: ${hour}:${min} on ${dict[day]}`);
    };

    // running main program
    (() => {
        printCurrentTime();

        console.log(`Calling API at ${API_ENDPOINT}`);

        request(API_ENDPOINT, callback);
    })();

    const processBody = (body) => {
        console.log('Data fetched from remote');

        const truckList = JSON.parse(body);

        const openTrucksObjects = truckList.filter(x => isFoodTruckOpen(x))
                                           .map(x => {
                                                return {
                                                    NAME: x.applicant,
                                                    ADDRESS: x.location
                                                }
                                            });

        // de-dup
        const uniqueOpenTrucks = new Set(openTrucksObjects);

        const result = [...uniqueOpenTrucks].sort(comp);

        displayResult(result);
    };

    // comparator - first sort by name then by address
    const comp = (a, b) => {
        if (a.NAME > b.NAME)
            return 1;
        if (a.NAME < b.NAME)
            return -1;

        return a.ADDRESS > b.ADDRESS ? 1 : -1;
    };

    const displayResult = async (result, pageSize = 10) => {
        if (!result || !result.length) {
            console.log('The result list is empty');
            return;
        }

        if (result.length <= pageSize) {
            console.table(result);
            return;
        }

        let batch = [], count = 0;
        for (const item of result) {
            if (count === pageSize) {
                console.table(batch);
                await pressToContinue();
                // reset batch per data dump
                batch = [];
                count = 0;
            }

            batch.push(item);
            count++;
        }

        // dump what's left
        if (batch.length) console.table(batch);
    };

    const pressToContinue = () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
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

    const isFoodTruckOpen = (foodTruck) => {
        if (!foodTruck) return false;

        if (getCurrentDay() !== foodTruck.dayorder) return false;

        const currentHour = getCurrentHour();
        const currentMin = getCurrentMin();
        const start = parseInt(foodTruck.start24);
        const end = parseInt(foodTruck.end24);

        if (currentHour < start) return false;

        if (currentHour > end) return false;

        if (currentHour === end && currentMin > 0) return false;

        return true;
    };

})();
