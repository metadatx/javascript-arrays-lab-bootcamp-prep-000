const app = "I don't do much."

function destructivelyAppendKitten(elm){
  window.kittens.push(elm)
}

function destructivelyPrependKitten(elm){
  window.kittens.unshift(elm)
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop()
}

function destructivelyRemoveFirstKitten(){
   window.kittens.shift()
}