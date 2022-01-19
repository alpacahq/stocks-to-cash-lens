// -----JS CODE-----
//@input Asset.ObjectPrefab myPrefab
//@input bool newReady = false;


var event = script.createEvent("TouchEndEvent");event.bind(function(eventData)
{
    if(updated){
        
        for(var i=0; i<number/10; i++)
        {
            script.myPrefab.instantiate(script.getSceneObject())
        }
        updated = false;
    }
});