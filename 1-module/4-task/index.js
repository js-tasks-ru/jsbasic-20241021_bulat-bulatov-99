function checkSpam(str) {
  const lowerText = str.toLowerCase();
  if(lowerText.includes('x' || 'xxx')) {
    return true
  } else {
    return false
  }
}

checkSpam()