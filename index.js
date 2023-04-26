const apples= () => console.log('apples');

function receivesAFunction(apples){
    console.log('grapes');
    apples();
}

function returnsANamedFunction(){
    return apples;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('bananas');
    }
}