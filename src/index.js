// import sayHello from './sayHello';

// console.log(sayHello('Marcus'));

// ======================================================================================================== //

// Generator runtime test.

import sayHello from './sayHello';

async function printBar() {
  return await sayHello();
}

printBar().then(result =>
  console.log(`The printBar resolved to value: ${result}`)
);
