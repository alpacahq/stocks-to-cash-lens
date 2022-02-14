// -----JS CODE-----
//@input Asset.ObjectPrefab hundred;
//@input Asset.ObjectPrefab one;
prevHighPrice = 0;
// To avoid instantiating cash while users are dragging slider check if number was updated only
// when finger was released. Number is a global representing current stock price.
if(prevHighPrice != highPrice && updated){
    const numberOfShares = 1;
    var valueToInstantiate = number * numberOfShares;
    var numberOfOnes = valueToInstantiate % 100;
    var numberOfHundreds = (valueToInstantiate - numberOfOnes) / 100;
    
    for (var i=0; i<numberOfOnes; i++) {
        script.one.instantiate(script.getSceneObject());
    }

    for (var j=0; j<numberOfHundreds; j++) {
        script.hundred.instantiate(script.getSceneObject());
    }

    updated = false;
    
    prevHighPrice = highPrice;
}
