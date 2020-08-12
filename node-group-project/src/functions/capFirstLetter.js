const capFirstLetter = (str) => {
  const words = str.split(' ');
  const capWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return capWords.join(' ');
}

export default capFirstLetter;