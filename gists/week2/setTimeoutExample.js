function run(a) {
  console.log(a, this);
}

var newFunction = run.bind(50);

setTimeout(newFunction, 1000);
