function checkSpam(str) {
  let lowerText = str.toLowerCase()
  if(lowerText.includes('x' || 'xxx')) {
    return true
  } else {
    return false
  }
}