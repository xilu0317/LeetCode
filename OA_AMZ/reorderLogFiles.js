const comparator = (a, b) => {
    let aRest = a.substring(a.indexOf(' ') + 1);
    let bRest = b.substring(b.indexOf(' ') + 1);

    if (aRest > bRest) {
        return 1;
    } else if (aRest < bRest) {
        return -1;
    }

    let aBefore = a.substring(0, a.indexOf('_') + 1);
    let bBefore = b.substring(0, b.indexOf('_') + 1);

    if (aBefore > bBefore) {
        return -1;
    } else {
        return 1;
    }
};

const reorderLogFiles = (logs) => {
    let letterList = [];
	let digitList = [];
	
    for (let log of logs) {
        let isDigit = !isNaN(log[log.length - 1]);
        if (isDigit) {
            digitList.push(log);
        } else {
            letterList.push(log);
        }
	}
	
    letterList.sort(comparator); 
    
    return [ ... letterList, ... digitList];
};