// Add your functions and code here
function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}


function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}


function appendKitten(kitten){
  return kittens.concat(kitten)
}


function prependKitten(kitten){
<<<<<<< HEAD
  var li = [kitten]
  return li.concat(kittens)
=======
  return kittens.splice(0,0,kitten)
>>>>>>> 046fcc40536d7487ac6c0b036339eb4de196fbb1
}

function removeLastKitten(){
  return kittens.slice(0,-1)
}

<<<<<<< HEAD
function removeFirstKitten(){
  return kittens.slice(1)
}
=======
>>>>>>> 046fcc40536d7487ac6c0b036339eb4de196fbb1
