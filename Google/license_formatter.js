const licenseKeyFormatting = (S, K) => {
    S = S.replace(/-/g, '');
    let res = [];

    for (let i = S.length - 1; i >= 0; i--) {
        // KEY place '-' every k characters
        if (res.length % (K + 1) === K) {
            res.push('-');
        }
        res.push(S[i]);
    }

    return res.reverse().join('').toUpperCase();
};
