const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What is your name? ", (answer1) => {
  rl.question("What is an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? ", (answer4) => {
        rl.question("What is your favourite thing to eat for that meal? ",(answer5) => {
            rl.question("Which sport is your absolute favourite?",(answer6) => {
                rl.question("What is your superpower? ", (answer7) => {
                  console.log(`My name is ${answer1},i like ${answer2} ,i like to listen to ${answer3} ,My favourite male ${answer4} , i like to eat ${answer5} in dinner , i like to play  ${answer6} , and my superpower is ${answer7}\n\n`
                  );
                  console.log("Thank you for your valuable feedback");

                  rl.close();
                });
              }
            );
          }
        );
      });
    });
  });
});
