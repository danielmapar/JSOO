// A closure is a function having access to the parent scope, 
// even after the parent function has closed.

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

/*
let map = new WeakMap();

let internal = function (object) {
    if (!map.has(object))
        map.set(object, {});
    return map.get(object);
}

function Point(x, y) {
    internal(this).x = x;
    internal(this).y = y;
}

Point.prototype.getX = function () {
    return internal(this).x;
};

Point.prototype.setX = function (x) {
    internal(this).x = x;
};

Point.prototype.getY = function () {
    return internal(this).y;
};

Point.prototype.setY = function () {
    internal(this).y = y;
};
*/