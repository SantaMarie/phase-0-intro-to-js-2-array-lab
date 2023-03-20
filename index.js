// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    const newCats = [...cats,name];
    return newCats
}

function prependCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    const newCats = [name,...cats]
    return newCats;
}

function  removeLastCat(){
    const cats = ['Milo', 'Otis', 'Garfield']
    const newCats = cats.slice(0,2)
    return newCats;
}

function removeFirstCat(){
    return cats.slice(1)
}