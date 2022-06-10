function receivesAFunction (cb){
    return cb()
}
let dog = "Chewbacca"
receivesAFunction (function (dog){ 
    return `My dog, is named ${dog}`
})

function returnsANamedFunction (){
    return function catName (cat) {
       return`My cat's name is ${cat}`
    }
}

function returnsAnAnonymousFunction (){
    return function(){
        return "Iterations upon iterations"
    }
}