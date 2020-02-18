// import sayHello from './sayHello';

// console.log(sayHello('Marcus'));

// ======================================================================================================== //

// Generator runtime test.

import sayHello from './sayHello';

async function printBar() {
  let foo = await sayHello();
  return foo;
}

printBar().then(result =>
  console.log(`The printBar resolved to value: ${result}`)
);
