var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  return kittens.push(name)
}


function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}


function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
var added =   kittens.splice(0, 0, name)
return added;
}