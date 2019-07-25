// Take-away message
// 1) SIMULATION, SIMULATION, SIMULATION !!!
// 2) If it is hard to do it in the forward way, think in reverse!
// 3) Because you did simulation you found out there is an edge case!

// Beautiful simulation here! When stuck, simulate!
// 17
// 13 17  ==>  17 13
// 11 17 13 ==> 13 11 17
// 7 13 11 17 ===> 17 7 13 11
// 5 17 7 13 11 ===> 11 5 17 7 13 
// 3 11 5 17 7 13  ===> 13 3 11 5 17 7
// 2 13 3 11 5 17 7 


const deckRevealedIncreasing = (deck) => {
    if (!deck) return deck;

    deck.sort((a, b) => b - a)
    let res = [];

    while (deck.length > 0) {
        res.unshift(deck.shift());

        // I won't figure out the edge case without the simulation 
        if (deck.length > 0) {
            res.unshift(res.pop())
        }
    }

    return res;
};