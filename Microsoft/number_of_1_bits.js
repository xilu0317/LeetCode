const hammingWeight = (n) => {
    return [...n.toString(2)].filter(x => x === '1').length;
};