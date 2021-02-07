function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("fizzbuzz")
    else if (i % 5 === 0) console.log("buzz")
    else if (i % 3 === 0) console.log("fizz")
    else console.log(i)
  }
}

module.exports = fizzBuzz