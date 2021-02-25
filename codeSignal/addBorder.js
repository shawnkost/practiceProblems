// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]


function addBorder(picture) {
  const pictureLength = picture[0].length + 2;
  let wall = "";
  for (let i = 0; i < pictureLength; i++) {
    wall = wall.concat("*");
  }
  picture.unshift(wall);
  picture.push(wall);

  for (let j = 1; j < picture.length - 1; j++) {
    picture[j] = "*".concat(picture[j], "*");
  }
  return picture;
}
