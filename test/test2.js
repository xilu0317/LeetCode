// IIFE
(() => {

    swap(1,2);

    function swap(a,b) {
        // pre-swap
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);

        b = a + b;
        a = b - a;
        b = b - a;

        console.log('---------');

        // post-swap
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);

    }

    // This function is hoisted
    function a() {
        console.log('a');
    }

    // Function `c` is not hoisted
    const c = () => {
        // definition need to proceed its usage
    };

    return 0;
})();