// -----JS CODE-----
//@input Asset.ObjectPrefab hundred;
//@input Asset.ObjectPrefab one;

// To avoid instantiating cash while users are dragging slider check if number was updated only
// when finger was released. Number is a global representing current stock price.
print("In instantiate");
if(global.number){
    const numberOfShares = 1;
    var valueToInstantiate = global.number * numberOfShares;
    var numberOfOnes = valueToInstantiate % 100;
    var numberOfHundreds = (valueToInstantiate - numberOfOnes) / 100;
    
    print(valueToInstantiate)
    print(numberOfOnes)
    print(numberOfHundreds)
    
    var childCount = script.getSceneObject().getChildrenCount;
    
    for (var obj = 0; obj < childCount; obj++) {
        var thisChild = script.getSceneObject().getChild(obj);
        print("here")
    }
    
    
    for (var i=0; i<numberOfOnes; i++) {
        script.one.instantiate(script.getSceneObject());
    }

    for (var j=0; j<numberOfHundreds; j++) {
        script.hundred.instantiate(script.getSceneObject());
    }
}
