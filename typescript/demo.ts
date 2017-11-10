interface Square {
  color?: String;
  width?: String;
};

function create(config: Square) {
  console.log(config.color);
};

// create({colour: 'dsdsd'});

interface functionName {
 (source: String, name: String): boolean;
}

let update:functionName = function(source: String, name: String) {
  console.log('sss');
  return false;
}
interface a {
  name: String;
}
interface b extends a {
  age: Number;
}

function c(name: b): void {
  console.log(name.name);
}

c({name: 'dsdsddd', age: 222})