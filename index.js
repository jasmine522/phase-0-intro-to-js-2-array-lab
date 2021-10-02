const cats = ["Milo", "Otis", "Garfield"];
cats();
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  const catsCopy = [...cats];
  catsCopy.push(name);
  return catsCopy;
}
function prependCat(name) {
  const catsArray = [...cats];
  catsArray.unshift(name);
  return catsArray;
}
function removeLastCat(name) {
  const newArray = [...cats];
  newArray.pop(name);
  return newArray;
}
function removeFirstCat(name) {
  const nextArray = [...cats];
  nextArray.shift(name);
  return nextArray;
}
