'use strict';

function calc_age(birthYear) {
  const age = 2037 - birthYear;

  function print_age() {
    let output = `${first_name}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;

      // Creating NEW variable with the same name as the outer Scope's variable
      const first_name = 'Rehemah';

      // Resigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you are a millennial, ${first_name}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }
  print_age();

  return age;
}

const first_name = 'Zihalirwa';
calc_age(1996);
// console.log(age);
// print_age();
