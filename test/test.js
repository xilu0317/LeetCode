(function () {
    let aa = ['a', 'a', '4'];
    let bb = ['b', 'b', '3'];
    let cc = ['c', '2', '2'];
    let dd = ['d', '1', '1'];

    let arr = [aa, bb, cc, dd];




    const comp = (a, b) => {
        let a = a.split(/\s/);
        let b = b.split(/\s/);

        let len = a.length > b.length ? a.length : b.length;

        for (let i = 1; i < len; i++) {
            if (a[i] === undefined) {
                return 1;
            }

            if (b[i] === undefined) {
                return -1;
            }

            if (a[i] > b[i]) {
                return 1;
            } else if ((a[i] < b[i])) {
                return -1;
            }

            continue;
        }

        return a[0] > b[0] ? 1 : -1;
    };


    arr.sort(comp);
    arr.forEach(x => console.log(x));
})();