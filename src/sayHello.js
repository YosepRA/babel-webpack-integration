// export default function(name) {
//   let foo = 'bar';
//   return `Hello, ${name} ${foo}`;
// }

// ======================================================================================================== //

// Generator runtime test.
export default function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar');
    }, 2000);
  });
}
