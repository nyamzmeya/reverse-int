module.exports = function reverse (n) {
    let s = n.toString();
    s = s.split("").reverse().join("");
    return parseInt(s);
}


