// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
  let x = [...cats, name]
    return x
}

function prependCat(name){
    let x = [name, ...cats]
    return x
}

function removeLastCat(){
    cats = ["Milo", "Otis", "Garfield"]
  
    let x = cats.slice(0, 2)
   
    return x
}

function removeFirstCat(){
    cats = ["Milo", "Otis", "Garfield"]
  
    let x = cats.slice(1)
   
    return x
}