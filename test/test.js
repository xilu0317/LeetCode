(function () {
    // test
    let str = 'abcdeABEG';
    console.log(fun(str));

    function isLowerCase(c) {
        return c === c.toLowerCase();
    }

    function fun(str) {
        let arr = [...str];    
    
        let lowArr = arr.filter(x => isLowerCase(x)).sort();
        let upperArr = arr.filter(x => !isLowerCase(x)).sort();
    
        for (let i = upperArr.length - 1; i >= 0; i--) {
            for (let j = lowArr.length - 1; j >= 0; j--) {
                if (upperArr[i].toLowerCase() === lowArr[j]) return upperArr[i];
            }
        }
    
        return '-1';
    }
})();