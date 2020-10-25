var encryptThis = function (text) {
  //convert string into array taking spaces as divisors
  const words = text.split(' ');
  let encrypted = '';
  for (let word of words) {
    let code = ''
    if (word.length > 2) {
      let second = word[1]
      let last = word.slice(-1)
      code = word.charCodeAt(0) + last + word.slice(2, -1) + second
    } else if (word.length === 2) {
      code = word.charCodeAt(0) + word[1]
    } else {
      code = word.charCodeAt(0) || ''
    }
    encrypted += ' ' + code
  }
  return encrypted.slice(1);
}

module.exports = encryptThis