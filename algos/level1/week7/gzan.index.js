function validSpacing(s) {
  const length = s.length;
  if (s[0] === ' ' || s[length - 1] === ' ') return false
  for (let i = 0; i < length; i++) {
    if (s[i] === ' ' && s[i + 1] === ' ') return false
  }
  return true
}

module.exports = validSpacing