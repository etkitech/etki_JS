function songDecoder(song) {
  //apply regEx
  //replace WUB globally with space -> replace(/WUB/g, ' ')
  //when there is more then one space next to eachother, make it globally one in total -> replace(/ +/g, ' ')
  //remove heading and trailing spaces -> trim()
  return song.replace(/(WUB)+/g, ' ').trim()
}

module.exports = songDecoder

