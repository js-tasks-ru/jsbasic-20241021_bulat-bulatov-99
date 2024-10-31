function checkSpam(str) {
  const lowerText = str.toLowerCase();
  if(lowerText.includes('x')) {
    return true
  } else if(lowerText.includes('xxx')) {
    return true
  } else {
    return false
  }
}

checkSpam()