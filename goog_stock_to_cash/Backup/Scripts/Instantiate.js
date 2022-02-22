// -----JS CODE-----
//@input Asset.ObjectPrefab hundred;
//@input Asset.ObjectPrefab one;

// To avoid instantiating cash while users are dragging slider, instantiate only
// when user stops touching screen AND stock price intialized.
if(global.number){
    const numberOfShares = 1;
    var valueToInstantiate = global.number * numberOfShares;
    var numberOfOnes = valueToInstantiate % 100;
    var numberOfHundreds = (valueToInstantiate - numberOfOnes) / 100;
  
    
    for (var i=0; i<numberOfOnes; i++) {
        script.one.instantiate(script.getSceneObject());
    }

    for (var j=0; j<numberOfHundreds; j++) {
        script.hundred.instantiate(script.getSceneObject());
    }
}
