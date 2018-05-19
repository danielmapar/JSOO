var counterFactory = function () {
    var counter = 0;
    return { 
        get: function() { return counter; },
        increment: function () {return counter += 1;},
        set: function(i) { counter = i; }
    };
};


var counter = counterFactory();
counter.set(10);
counter.increment();
counter.increment();
counter.increment();
counter.increment();

delete counter.increment;
console.log(counter);
console.log(counter.get());
