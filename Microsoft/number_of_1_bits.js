const hammingWeight = (n) => {
    // toString(2) will convert the number to binary representation
    // [... spread] operator will convert the string into an array
    return [...n.toString(2)].filter(x => x === '1').length;
};
