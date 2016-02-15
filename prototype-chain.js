var _ = require('underscore');

var gold = {a: 1};
// property look up (looking for a)
console.log("Gold A: ", gold.a); // 1
console.log("Gold Z: ",gold.z); // undefined

// We are copying values where, not pointers
// One time property copying
var blue = _.extend({b: 2}, gold);
console.log("Blue: ", blue);

// Pointer (ongoing lookup-time delegation)
var rose = Object.create(gold);
rose.b = "only in rose, this is not in a";
console.log("Rose: ", rose); // only prints B (which is actually part of Rose)

// The lookup process starts in the current object (Rose), and moves to the
// father (Gold) in order to find the desired key

gold.z = "NEW";

console.log("Rose Z: ", rose.z);

// Does gold delegate failed lookups to someone?
// Yes it does! Their is a top level object that JS provides
// This is where all the generic functions are provided (toString)
// This is called the Object Prototype

console.log("Rose Z toString: ", rose.toString());

// This is a good example of binding of the parameter this. toString() is binding
// rose in this example

// Array have a super class (Array prototype) and after that it points to the
// master father (Object Protoype) for example
