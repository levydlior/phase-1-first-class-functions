function receivesAFunction(newFunction) {
    newFunction()
}

function returnsANamedFunction(){
    return function boop (){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}