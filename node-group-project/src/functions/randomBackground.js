const randomBackground = () => {
  const backgrounds = [
    `1-gsd-puppy.jpg`,
    `1-kitten.jpg`,
    `1-maltipoo-puppy.jpg`,
    `1-pug-puppy.jpg`,
    `2-corgi-puppies.jpg`,
    `2-puppies.jpg`,
    `3_kittens.jpg`,
    `4_kittens.jpg`,
    `4-voids.jpg`,
    `5_kittens.jpg`
  ]
  const capWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return "/img/bg/" + backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

export default randomBackground;