
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const udacityProgram = process.env.UDACITY_PROGRAM;
console.log('The program I am doing with Udacity is ${udacityProgram}');

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
