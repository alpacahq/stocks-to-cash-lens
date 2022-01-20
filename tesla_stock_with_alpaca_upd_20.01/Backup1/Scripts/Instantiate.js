// -----JS CODE-----
//@input Asset.ObjectPrefab hundred;
//@input Asset.ObjectPrefab one;

// To avoid instantiating cash while users are dragging slider check if number was updated only
// when finger was released.
if(updated)
{
    const numberOfShares = 2 // 2 shares is equivalent to buying $100 5yrs ago
    const numberOfOnes = number % 100     
    const numberOfHundreds = (number - numberOfOnes) / 100
    if(number == numberOfOnes)
    {
        for(var i=0; i<numberOfOnes; i++)
        {
           script.one.instantiate(script.getSceneObject())
        }
    }
    else
    {
        for(var k=0; k<numberOfOnes; k++)
        {
            script.one.instantiate(script.getSceneObject())
        }
        for(var j=0; j<numberOfHundreds; j++)
        {
            script.hundred.instantiate(script.getSceneObject())
        }
    }
    updated = false;
}
