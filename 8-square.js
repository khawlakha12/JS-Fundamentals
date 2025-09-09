const arg = process.argv[2];
const size = parseInt(arg, 10);
if (!arg || isNaN(size) || size < 1) console.log("Missing size");
else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}