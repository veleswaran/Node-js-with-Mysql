const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var name;
function getInputValues(count, values) {
  rl.question(`Enter value ${count}: `, (answer) => {
    values.push(answer);

    if (count < 5) {
      getInputValues(count + 1, values);
    } else {
        name=values;
      console.log('You entered:', values);
      rl.close();
    }
  });
}

getInputValues(1, []);
console.log(name);