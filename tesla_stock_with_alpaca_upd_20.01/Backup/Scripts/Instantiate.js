// -----JS CODE-----
//@input Asset.ObjectPrefab hundred;
//@input Asset.ObjectPrefab one;

// To avoid instantiating cash while users are dragging slider check if number was updated only
// when finger was released.
//var event = script.createEvent("TouchEndEvent");event.bind(function(eventData)
//{
    if(updated)
    {
        // logic to instantiate combination of banknotes and packs
        // now 100x1 packs + 1 banknotes
        
//        if(number > 100){
        var left = number % 100 
//        }
        
        if(number == left)
        {
            for(var i=0; i<number; i++)
            {
               script.one.instantiate(script.getSceneObject())
            }
        }
        else
        {
            for(var j=0; j<(number-left)/100; j++)
            {
                script.hundred.instantiate(script.getSceneObject())
            }
            for(var k=0; k<left; k++)
            {
                script.one.instantiate(script.getSceneObject())
            }
        }
        updated = false;
    }
//});
