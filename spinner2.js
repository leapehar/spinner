process.stdout.write('hello from spinner1.js... \rheyyy\n');

let count = 100;
let charArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  '];

for (const char of charArray) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count += 200
}

