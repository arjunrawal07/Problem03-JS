class ArrayRotator {
  rotateLeft(arr, n) {
    return arr.concat(arr.splice(0, n));
  }
}

module.exports = ArrayRotator;
