//WOULD HAVE BEEN A LOT EASIER IF I HAD JUST USED ".split()" ON THE STRING
const songDecoder = (song) => {
    let outPut = ''
    let stringTobeChecked = song
    do {
        let i = stringTobeChecked.indexOf('WUB')
        if (i === -1) {
            outPut = outPut.trim() + ' ' + stringTobeChecked
            break
        }  
        outPut = outPut.trim() + ' ' + stringTobeChecked.slice(0, i)
        stringTobeChecked = stringTobeChecked.slice(i + 3)
    } while (stringTobeChecked !== '')
    return outPut.trim()
}
module.exports = songDecoder
