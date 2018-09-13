/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {


    var lovedByFirst = preferences[i];
    var lovedBySecond = preferences[lovedByFirst - 1];

    if (lovedByFirst === lovedBySecond || lovedBySecond === preferences[lovedBySecond - 1]) {
      continue;
    }

    if  (preferences[lovedBySecond - 1] === (i + 1)) {
      count++;
    }
  }
  return count/3;
};
