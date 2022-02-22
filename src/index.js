module.exports = function reverse(n) {
    let str = "";
    let arr = [];

    if (n < 0) {
        n *= -1;
    }
    str = n.toString();
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }
    str = arr.join("");
    return +str;
};
