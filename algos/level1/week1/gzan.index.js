function areaOrParameterLong(l, w) {
    if (l === w) {
        return l * w;
    } else {
        return (l + w) * 2;
    }
}

function areaOrParameterShort(l, w) {
    // if/else in JavaScript ES6 style
    // if length is equal to width, return the area, else the parameter
    return (l === w) ? l * w : (l + w) * 2;
}

module.exports = areaOrParameterShort;